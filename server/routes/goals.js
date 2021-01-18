const express = require('express');
const passport = require('passport');

const router = express.Router();

/**
 * Load MongoDB models.
 */
const WeeklyGoal = require('../models/Goals/Weekly');

/**
 * Load middlewares
 */
const isSessionValid = require('../middleware/auth/isSessionValid');
const isAccountActivated = require('../middleware/isAccountActivated');

/**
 * Load input validators.
 */
const validateNewWeeklyGoalInput = require('../validation/goals/weekly/newGoal');

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
    const goals = await WeeklyGoal.find({ user: req.user.id });
    res.status(200).json({ code: 200, goals, total: goals.length });
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
router.post(
  '/weekly',
  requireAuth,
  isSessionValid,
  isAccountActivated,
  async (req, res) => {
    try {
      /**
       * validate the goal important for title
       */
      const { error, isValid } = validateNewWeeklyGoalInput(req.body);

      if (!isValid) {
        return res.status(400).json({ code: 400, error });
      }

      const { title } = req.body;
      const goal = new WeeklyGoal({
        user: req.user.id,
        title
      });
      await goal.save();
      res.status(201).json({ code: 201, goal, message: 'Added weekly goal.' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ code: 500, error: 'Internal Server Error' });
    }
  }
);

/**
 * @route /goals/weekly/:goal_id/complete
 * @method PUT
 * @description Allows a logged in user to complete a weekly goal as complete
 */
router.put(
  '/weekly/:goal_id/complete',
  requireAuth,
  isSessionValid,
  isAccountActivated,
  async (req, res) => {
    try {
      const goal = await WeeklyGoal.findById(req.params.goal_id);
      goal.isCompleted = !goal.isCompleted;
      await goal.save();
      res.status(200).json({ code: 200, isCompleted: goal.isCompleted });
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
  isAccountActivated,
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
