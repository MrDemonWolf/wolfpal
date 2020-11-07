const request = require('supertest');

const server = require('../index');
const User = require('../models/User');

/**
 * Load Configs
 */
const testAccounts = require('./data/testAccounts');

/**
 * Create a empty object for creds to be used later
 */
const creds = {
  user: {
    accessToken: '',
    refreshToken: ''
  },
  admin: {
    accessToken: '',
    refreshToken: ''
  },
  owner: {
    accessToken: '',
    refreshToken: ''
  },
  extra: {
    emailVerification: {
      accessToken: '',
      refreshToken: ''
    }
  }
};

const emailVerification = {
  emailVerificationToken: '',
  emailVerificationTokenExpire: ''
};

describe('🧑 User:', () => {
  describe('🤖 Activate User:', () => {
    it('should create extra user for testing email verification', done => {
      request(server)
        .post('/auth/register')
        .send({
          username: testAccounts.extra.emailVerification.username,
          email: testAccounts.extra.emailVerification.email,
          password: testAccounts.extra.emailVerification.password
        })
        .expect(201)
        .end(async (err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });
    it('should resend user account activate', done => {
      request(server)
        .post('/user/activate-account/resend')
        .send({
          email: testAccounts.extra.emailVerification.email
        })
        .expect(200)
        .end(async (err, res) => {
          if (err) {
            return done(err);
          }
          try {
            const user = await User.findOne({
              email: testAccounts.extra.emailVerification.email
            });
            /**
             * Asign the tokens to a variable to use later in the tests.
             */
            emailVerification.emailVerificationToken =
              user.emailVerificationToken;
            emailVerification.emailVerificationTokenExpire =
              user.emailVerificationTokenExpire;
            done();
          } catch (err) {
            return done(err);
          }
        });
    });
    it('should activate account via email verification token', done => {
      request(server)
        .put(
          `/user/activate-account/${emailVerification.emailVerificationToken}`
        )
        .expect(200)
        .expect('Content-Type', /json/)
        .end(async (err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });
  describe('😅 Reset Password', () => {
    describe('📧 Reset Password: Forgot Password', () => {
      // http://localhost:40919/wolfpal/#forgot-password
    });
    describe('📧 Reset Password: Change Password with token', () => {
      // http://localhost:40919/wolfpal/#forgot-password
    });
  });
});
