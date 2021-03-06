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
 * Load input validators.
 */
const validateEmail = require('../validation/notifications/email');

/**
 * @route /notifications
 * @method GET
 * @description Allows logged in user to get current notifications preferences
 */
router.get('/', requireAuth, isSessionValid, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    res.status(200).json({
      notifications: user.notifications
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      code: 'INTERNAL_SERVER_ERROR',
      error: 'Internal Server Error.'
    });
  }
});

/**
 * @route /notifications/email
 * @method PUT
 * @description Allows logged in user to enable or disable emails.
 */
router.put('/email', requireAuth, isSessionValid, async (req, res) => {
  try {
    /**
     * Validdate the user input weeklyGoals
     */
    const { codes, errors, isValid } = validateEmail(req.body);

    if (!isValid) {
      return res.status(400).json({ codes, errors });
    }

    const user = await User.findById(req.user.id);

    user.notifications.email.weeklyGoals = req.body.weeklyGoals;
    await user.save();

    res.status(200).json({
      code: 'EMAIL_NOTIFICATIONS_CHANGED',
      message: 'Your notifications preferences for email has been changed.'
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      code: 'INTERNAL_SERVER_ERROR',
      error: 'Internal Server Error.'
    });
  }
});

module.exports = router;
