const express = require('express');
const moment = require('moment');

const { customAlphabet } = require('nanoid/async');

const router = express.Router();

/**
 * Load MongoDB models.
 */
const User = require('../models/User');

/**
 * Setup nanoid
 */
const passwordResetToken = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_',
  64
);

/**
 * Load input validators.
 */
const validateForgotPasswordInput = require('../validation/user/forgot-password');
const validateResetPasswordInput = require('../validation/user/reset-password');

/**
 * @route /user/forgot-password
 * @description Allows a register user to request a password reset email.
 */
router.post('/forgot-password', async (req, res) => {
  try {
    /**
     * Validdate the user important for username,email,password
     */
    const { errors, isValid } = validateForgotPasswordInput(req.body);

    if (!isValid) {
      return res.status(400).json({ code: 400, errors });
    }

    const { email } = req.body;
    /**
     * Get the user by there email
     */
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        code: 400,
        error: 'There is no account with that email.'
      });
    }

    user.passwordResetToken = await passwordResetToken();
    user.passwordResetTokenExpire = moment().add('3', 'h');

    await user.save();

    res.status(200).json({
      code: 200,
      message: `An Email has been sent to ${email} with further instructions on how to reset your password. Please check your email account.`
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ code: 500, error: 'Internal Server Error' });
  }
});

/**
 * @route /user/reset-password/:reset_token
 * @description Allows a register user to request a password reset email.
 */
router.post('/reset-password/:reset_token', async (req, res) => {
  try {
    /**
     * Validdate the user important for username,email,password
     */
    const { errors, isValid } = validateResetPasswordInput(req.body);

    if (!isValid) {
      return res.status(400).json({ code: 400, errors });
    }

    /**
     * Get the user by there email
     */
    const user = await User.findOne({
      passwordResetToken: req.params.reset_token,
      passwordResetTokenExpire: {
        $gt: moment()
      }
    });

    if (!user) {
      return res.status(400).json({
        code: 400,
        error: 'Either your reset token has expired or already has been used.'
      });
    }
    /**
     * Sets the token and expire date to undfined which removes them
     * from the database
     */
    user.password = req.body.password;
    user.passwordResetToken = undefined;
    user.passwordResetTokenExpire = undefined;

    await user.save();

    res.status(200).json({
      code: 200,
      message:
        'Your passsword has been updated.  Please try logging in with your new password,.'
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ code: 500, error: 'Internal Server Error' });
  }
});

module.exports = router;
