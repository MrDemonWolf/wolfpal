const consola = require('consola');

const User = require('../../models/User');

module.exports = async () => {
  /**
   * Find all users who have email notifications enabled for Weekly Goals
   */
  const users = await User.find({
    'notifications.email.weeklyGoals': { $ne: false }
  });
  consola.log('');
  consola.log('User data:', users);
  consola.log('');
};
