const express = require('express');
const passport = require('passport');

const router = express.Router();

/**
 * Load MongoDB models.
 */
const User = require('../models/User');

/**
 * Load middlewares
 */
const isSessionValid = require('../middleware/auth/isSessionValid');

/**
 * Require authentication middleware.
 */
const requireAuth = passport.authenticate('jwt', {
  session: false
});

/**
 * @route /account
 * @method GET
 * @description Allows a logged in user to get their account details.
 */
router.get('/', requireAuth, isSessionValid, async (req, res) => {
  try {
    /**
     * Get the current user data and remove sensitive data
     */
    const user = await User.findById(req.user.id).select(
      '-password -twoFactorSecret -emailVerificationToken -emailVerificationTokenExpire'
    );

    res.status(200).json({ code: 200, user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ code: 500, error: 'Internal Server Error' });
  }
});

/**
 * @route /account/email-change
 */
module.exports = router;
