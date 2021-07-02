const express = require('express');
const passport = require('passport');

const router = express.Router();

/**
 * Load MongoDB models.
 */
const Session = require('../models/Session');

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
 * @route /sessions
 * @method GET
 * @description Allows a logged in user to get their current sessions.
 */
router.get('/', requireAuth, isSessionValid, async (req, res) => {
  try {
    /**
     * Get the current user data and remove sensitive data
     */
    const sessions = await Session.find({
      user: req.user.id
    }).select('-user -__v -updatedAt');

    res.status(200).json({ sessions, total: sessions.length });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      code: 'INTERNAL_SERVER_ERROR',
      error: 'Internal Server Error.'
    });
  }
});

/**
 * @route /sessions/:session_id
 * @method delete
 * @description Allows a logged in user to revoke a session.
 */
router.delete('/:session_id', requireAuth, isSessionValid, async (req, res) => {
  try {
    const session = await Session.findByIdAndDelete(req.params.session_id);

    if (!session) {
      return res
        .status(404)
        .json({ code: 'SESSION_NOT_FOUND', error: 'Session not found.' });
    }

    res.status(200).json({
      code: 'SESSION_REVOKED',
      error: 'Session has been revoked.'
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
 * @route /sessions
 * @method delete
 * @description Allows a logged in user to revoke all active sessions

 */
router.delete('/', requireAuth, isSessionValid, async (req, res) => {
  try {
    await Session.deleteMany({ user: req.user.id, isRevoked: { $ne: true } });
    res.status(200).json({
      code: 'ALL_SESSIONS_REVOKED',
      error: 'All Sessions has been revoked.'
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
