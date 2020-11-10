// const User = require('../models/User');

// /**
//  * Load Configs
//  */
// const testAccounts = require('./data/testAccounts.json');

// describe('🧹 Clean up:', () => {
//   it('Remove all accounts', async done => {
//     try {
//       const email = [
//         testAccounts.user.email,
//         testAccounts.admin.email,
//         testAccounts.owner.email,
//         testAccounts.extra.emailVerification.email,
//         testAccounts.extra.passwordChange.email,
//         testAccounts.extra.account.email
//       ];
//       console.log(email);
//       await User.deleteMany({ email });
//       done();
//     } catch (err) {
//       done(err);
//     }
//   });
// });
