const request = require('supertest');

const server = require('../index');
const User = require('../models/User');

/**
 * Load Configs
 */
const testAccounts = require('./data/testAccounts.json');

/**
 * Create a empty object for creds to be used later
 */
const creds = {
  extra: {
    account: {
      accessToken: '',
      refreshToken: ''
    }
  }
};

const emailChange = {
  emailVerificationToken: '',
  emailVerificationTokenExpire: ''
};

describe('💾 Account:', () => {
  it('should register a user for testing account routes.', done => {
    request(server)
      .post('/auth/register')
      .send({
        username: testAccounts.extra.account.username,
        email: testAccounts.extra.account.email,
        password: testAccounts.extra.account.password
      })
      .expect(201)
      .end(async (err, res) => {
        if (err) {
          return done(err);
        }

        try {
          const user = await User.findOne({
            email: testAccounts.extra.account.email
          });
          user.emailVerified = true;
          user.emailVerificationToken = undefined;
          user.emailVerificationTokenExpire = undefined;
          await user.save();
          done();
        } catch (err) {
          return done(err);
        }
      });
  });
  it('should login as user', done => {
    request(server)
      .post('/auth/login')
      .send({
        email: testAccounts.extra.account.email,
        password: testAccounts.extra.account.password
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        if (err) {
          return done(err);
        }
        try {
          creds.extra.account.accessToken = res.body.access_token;
          creds.extra.account.refreshToken = res.body.refresh_token;
          done();
        } catch (err) {
          return done(err);
        }
      });
  });
  it('should get account details.', done => {
    request(server)
      .get('/account')
      .set('Authorization', `Bearer ${creds.extra.account.accessToken}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });

  it('should requst account email change', done => {
    request(server)
      .post('/account/email-change')
      .set('Authorization', `Bearer ${creds.extra.account.accessToken}`)
      .send({
        email: testAccounts.extra.account.ec
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });

  it('should resend email change verification', done => {
    request(server)
      .post('/account/email-change/resend')
      .set('Authorization', `Bearer ${creds.extra.account.accessToken}`)
      .send({
        email: testAccounts.extra.account.ec
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        if (err) {
          return done(err);
        }
        try {
          const user = await User.findOne({
            email: testAccounts.extra.account.email
          });
          /**
           * Asign the tokens to a variable to use later in the tests.
           */
          emailChange.emailVerificationToken = user.emailVerificationToken;
          emailChange.emailVerificationTokenExpire =
            user.emailVerificationTokenExpire;
          done();
        } catch (err) {
          return done(err);
        }
      });
  });

  it('should change account email', done => {
    request(server)
      .put(`/account/email-change/${emailChange.emailVerificationToken}`)
      .set('Authorization', `Bearer ${creds.extra.account.accessToken}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });

  it('should change account password', done => {
    request(server)
      .put('/account/change-password')
      .set('Authorization', `Bearer ${creds.extra.account.accessToken}`)
      .send({
        oldPassword: testAccounts.extra.account.password,
        newPassword: testAccounts.extra.account.password2
      })
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
