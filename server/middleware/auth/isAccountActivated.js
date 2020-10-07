const User = require('../../models/User');

module.exports = async (req, res, next) => {
  try {
    const isActivated = await User.findOne({
      email: req.body.email,
      emailVerified: { $ne: false }
    });

    if (isActivated) {
      return next();
    }
    res.status(401).send({
      status: 401,
      error:
        'Your account must be activated before you can login. Please check your email you signed up with.'
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
};
