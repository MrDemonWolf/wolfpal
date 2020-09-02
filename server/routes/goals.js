const express = require('express');
const passport = require('passport');

const router = express.Router();

/**
 * Load MongoDB models.
 */
const User = require('../models/User');
const WeeklyGoals = require('../models/Goals/Weekly');

/**
 * Load middlewares
 */
const isSessionValid = require('../middleware/isSessionValid');

/**
 * Require authentication middleware.
 */
const requireAuth = passport.authenticate('jwt', {
  session: false
});

/**
 * @route /goals/weekly
 * @method GET
 * @description Allows a logged in user to get their account details.
 */
router.get('/weekly', requireAuth, isSessionValid, async (req, res) => {
  try {
    const weeklyGoals = await WeeklyGoals.find({ user: req.user.id });
    res.status(200).json({ code: 200, goals: weeklyGoals });
  } catch (err) {
    console.log(err);
    res.status(500).json({ code: 500, error: 'Internal Server Error' });
  }
});

/**
 * @route /goals/weekly
 * @method POST
 * @description Allows a logged in user to get their account details.
 */
router.post('/weekly', requireAuth, isSessionValid, async (req, res) => {
  try {
    const { title } = req.body;
    const weeklyGoal = new WeeklyGoals({
      user: req.user.id,
      title
    });
    await weeklyGoal.save();
    res.status(200).json({ code: 200, weeklyGoal });
  } catch (err) {
    console.log(err);
    res.status(500).json({ code: 500, error: 'Internal Server Error' });
  }
});

module.exports = router;
