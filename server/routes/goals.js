const express = require('express');
const passport = require('passport');
const moment = require('moment');

const router = express.Router();

/**
 * Load MongoDB models.
 */
const WeeklyGoal = require('../models/Goals/Weekly');
const YearlyGoal = require('../models/Goals/Yearly');

/**
 * Load middlewares
 */
const isSessionValid = require('../middleware/auth/isSessionValid');
const isAccountActivated = require('../middleware/isAccountActivated');

/**
 * Load input validators.
 */
const validateNewWeeklyGoalInput = require('../validation/goals/weekly/newGoal');
const validateNewYearlyGoalInput = require('../validation/goals/yearly/newGoal');

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
    res.status(200).json({ goals, total: goals.length });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      code: 'INTERNAL_SERVER_ERROR',
      error: 'Internal Server Error.'
    });
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
      const { codes, errors, isValid } = validateNewWeeklyGoalInput(req.body);

      if (!isValid) {
        return res.status(400).json({ codes, errors });
      }

      const { title } = req.body;
      const goal = new WeeklyGoal({
        user: req.user.id,
        title
      });
      await goal.save();
      res
        .status(201)
        .json({ code: 'ADDED', goal, message: 'Added weekly goal.' });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        code: 'INTERNAL_SERVER_ERROR',
        error: 'Internal Server Error.'
      });
    }
  }
);

/**
 * @route /goals/weekly/:goal_id/complete
 * @method PUT
 * @description Allows a logged in user to mark a weekly goal as complete
 */
router.put(
  '/weekly/:goal_id/complete',
  requireAuth,
  isSessionValid,
  isAccountActivated,
  async (req, res) => {
    try {
      const goal = await WeeklyGoal.findById(req.params.goal_id);

      if (!goal) {
        return res.status(404).json({
          code: 'NON_EXISTENT',
          error: 'Goal could not be found.'
        });
      }

      goal.isCompleted = true;
      await goal.save();
      res.status(200).json({ code: 'COMPLETED', isCompleted: true });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        code: 'INTERNAL_SERVER_ERROR',
        error: 'Internal Server Error.'
      });
    }
  }
);

/**
 * @route /goals/weekly/:goal_id/not-complete
 * @method PUT
 * @description Allows a logged in user to mark a weekly goal as not complete
 */
router.put(
  '/weekly/:goal_id/not-complete',
  requireAuth,
  isSessionValid,
  isAccountActivated,
  async (req, res) => {
    try {
      const goal = await WeeklyGoal.findById(req.params.goal_id);

      if (!goal) {
        return res.status(404).json({
          code: 'NON_EXISTENT',
          error: 'Goal could not be found.'
        });
      }

      goal.isCompleted = false;
      await goal.save();
      res.status(200).json({ code: 'NOT_COMPLETED', isCompleted: false });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        code: 'INTERNAL_SERVER_ERROR',
        error: 'Internal Server Error.'
      });
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
      const goal = await WeeklyGoal.findByIdAndDelete(req.params.goal_id);

      if (!goal) {
        return res.status(404).json({
          code: 'NON_EXISTENT',
          error: 'Goal could not be found.'
        });
      }

      res
        .status(200)
        .json({ code: 'REMOVED', message: 'Goal has been removed.' });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        code: 'INTERNAL_SERVER_ERROR',
        error: 'Internal Server Error.'
      });
    }
  }
);

/**
 * @route /goals/yearly
 * @method GET
 * @description Allows a logged in user to get yearly goals
 */
router.get('/yearly', requireAuth, isSessionValid, async (req, res) => {
  try {
    const goals = await YearlyGoal.find({ user: req.user.id });
    res.status(200).json({ goals, total: goals.length });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      code: 'INTERNAL_SERVER_ERROR',
      error: 'Internal Server Error.'
    });
  }
});

/**
 * @route /goals/yearly/:goal_id
 * @method GET
 * @description Allows a logged in user to get a single yearly goal
 */
router.get(
  '/yearly/:goal_id',
  requireAuth,
  isSessionValid,
  isAccountActivated,
  async (req, res) => {
    try {
      const goal = await YearlyGoal.findById(req.params.goal_id);

      if (!goal) {
        return res.status(404).json({
          code: 'NON_EXISTENT',
          error: 'Goal could not be found.'
        });
      }

      res.status(200).json({ goal });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        code: 'INTERNAL_SERVER_ERROR',
        error: 'Internal Server Error.'
      });
    }
  }
);

/**
 * @route /goals/yearly
 * @method POST
 * @description Allows a logged in user create a new yearly goal.
 */
router.post(
  '/yearly',
  requireAuth,
  isSessionValid,
  isAccountActivated,
  async (req, res) => {
    try {
      /**
       * validate the goal important for title
       */
      const { codes, errors, isValid } = validateNewYearlyGoalInput(req.body);

      if (!isValid) {
        return res.status(400).json({ codes, errors });
      }

      const { title, completeBy } = req.body;
      const goal = new YearlyGoal({
        user: req.user.id,
        title,
        completeBy: moment(completeBy),
        weekly: []
      });
      await goal.save();
      res
        .status(201)
        .json({ code: 'ADDED', goal, message: 'Added Yearly goal.' });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        code: 'INTERNAL_SERVER_ERROR',
        error: 'Internal Server Error.'
      });
    }
  }
);

/**
 * @route /goals/yearly
 * @method DELETE
 * @description Allows a logged in user to delete a yearly goal
 */
router.delete(
  '/yearly/:goal_id',
  requireAuth,
  isSessionValid,
  isAccountActivated,
  async (req, res) => {
    try {
      const goal = await YearlyGoal.findByIdAndDelete(req.params.goal_id);

      if (!goal) {
        return res.status(404).json({
          code: 'NON_EXISTENT',
          error: 'Goal could not be found.'
        });
      }

      res
        .status(200)
        .json({ code: 'REMOVED', message: 'Goal has been removed.' });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        code: 'INTERNAL_SERVER_ERROR',
        error: 'Internal Server Error.'
      });
    }
  }
);

module.exports = router;
