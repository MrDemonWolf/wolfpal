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
 * @description Allows a logged in user to get weekly goals
 */
router.get('/weekly', requireAuth, isSessionValid, async (req, res) => {
  try {
    const weeklyGoals = await WeeklyGoal.find({ user: req.user.id });
    res.status(200).json({ code: 200, goals: weeklyGoals });
  } catch (err) {
    console.log(err);
    res.status(500).json({ code: 500, error: 'Internal Server Error' });
  }
});

/**
 * @route /goals/weekly
 * @method POST
 * @description Allows a logged in user create a new weekly goal.
 */
router.post('/weekly', requireAuth, isSessionValid, async (req, res) => {
  try {
    const { title } = req.body;
    const weeklyGoal = new WeeklyGoal({
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

/**
 * @route /goals/weekly/:goal_id/complete
 * @method PUT
 * @description Allows a logged in user to complete a weekly goal as complete
 */
router.put(
  '/weekly/:goal_id/complete',
  requireAuth,
  isSessionValid,
  async (req, res) => {
    try {
      const weeklyGoal = await WeeklyGoal.findById(req.params.goal_id);
      weeklyGoal.isCompleted = !weeklyGoal.isCompleted;
      await weeklyGoal.save();
      res.status(200).json({ code: 200, isCompleted: weeklyGoal.isCompleted });
    } catch (err) {
      console.log(err);
      res.status(500).json({ code: 500, error: 'Internal Server Error' });
    }
  }
);

/**
 * @route /goals/weekly
 * @method DELETE
 * @description Allows a logged in user to delete a weekly goal
 */
router.delete(
  '/weekly/:goal_id',
  requireAuth,
  isSessionValid,
  async (req, res) => {
    try {
      await WeeklyGoal.findByIdAndDelete(req.params.goal_id);
      res.status(200).json({ code: 200, message: 'Goal has been removed.' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ code: 500, error: 'Internal Server Error' });
    }
  }
);

module.exports = router;
