const User = require('../models/User');

module.exports = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.user.email });

    if (!user) {
      return res.status(400).json({
        code: 400,
        error: `Couldn't find your ${process.env.SITE_TITLE} Account`
      });
    }

    if (user.emailVerified) {
      return next();
    }
    res.status(400).send({
      status: 400,
      error:
        'Your account must be activated before you can do that. Please check your email you signed up with.'
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
};
