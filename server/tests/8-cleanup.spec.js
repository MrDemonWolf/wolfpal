const User = require('../models/User');
const Session = require('../models/Session');
const WeeklyGoal = require('../models/Goals/Weekly');

/**
 * Load Configs
 */
const testAccounts = require('./data/testAccounts.json');

describe('🧹 Clean up:', () => {
  it('Remove all accounts', async () => {
    const email = [
      testAccounts.user.email,
      testAccounts.admin.email,
      testAccounts.owner.email,
      testAccounts.extra.emailVerification.email,
      testAccounts.extra.passwordChange.email,
      testAccounts.extra.account.email,
      testAccounts.extra.account.ec
    ];
    await User.deleteMany({ email });
    await WeeklyGoal.deleteMany({});
  });

  it('Remove all sessions', async () => {
    await Session.deleteMany({});
  });
  it('Remove all weekly goals', async () => {
    await WeeklyGoal.deleteMany({});
  });
});
