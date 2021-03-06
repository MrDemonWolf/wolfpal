const express = require('express');
const passport = require('passport');

const router = express.Router();

/**
 * Load MongoDB models.
 */
const User = require('../models/User');
const WeeklyGoal = require('../models/Goals/Weekly');

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
 * @route /analytics
 * @method GET
 * @description Allows a logged in user to get analytics on all goals.
 */

router.get('/', requireAuth, isSessionValid, async (req, res) => {
  try {
    /**
     * Get the weekly goal data
     */
    const weeklyGoals = await WeeklyGoal.find({
      user: req.user.id
    }).countDocuments();

    const weeklyCompleted = await WeeklyGoal.find({
      user: req.user.id,
      isCompleted: { $ne: false }
    }).countDocuments();

    const weeklyNotCompleted = await WeeklyGoal.find({
      user: req.user.id,
      isCompleted: { $ne: true }
    }).countDocuments();

    res.status(200).json({
      weekly: {
        completed: weeklyCompleted,
        notCompleted: weeklyNotCompleted,
        total: weeklyGoals
      }
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
 * @route /analytics/weekly
 * @method GET
 * @description Allows a logged in user to get analytics on weekly goals
 */

router.get('/weekly', requireAuth, isSessionValid, async (req, res) => {
  try {
    /**
     * Get the weekly goal data
     */
    const weeklyGoals = await WeeklyGoal.find({
      user: req.user.id
    }).countDocuments();

    const weeklyCompleted = await WeeklyGoal.find({
      user: req.user.id,
      isCompleted: { $ne: false }
    }).countDocuments();

    const weeklyNotCompleted = await WeeklyGoal.find({
      user: req.user.id,
      isCompleted: { $ne: true }
    }).countDocuments();

    res.status(200).json({
      weekly: {
        completed: weeklyCompleted,
        notCompleted: weeklyNotCompleted,
        total: weeklyGoals
      }
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
