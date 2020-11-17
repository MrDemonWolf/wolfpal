const request = require('supertest');

const server = require('../index');

/**
 * Load Configs
 */
const testAccounts = require('./data/testAccounts.json');

/**
 * Create a empty object for creds to be used later
 */
const creds = {
  user: {
    accessToken: '',
    refreshToken: ''
  }
};

describe('✉ Notifications:', () => {
  it('should login as user', done => {
    request(server)
      .post('/auth/login')
      .send({
        email: testAccounts.user.email,
        password: testAccounts.user.password
      })
      .expect(200)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        if (err) {
          return done(err);
        }
        try {
          creds.user.accessToken = res.body.access_token;
          creds.user.refreshToken = res.body.refresh_token;
          done();
        } catch (err) {
          return done(err);
        }
      });
  });
  it('should get current notifications preferences.', done => {
    request(server)
      .get('/notifications')
      .set('Authorization', `Bearer ${creds.user.accessToken}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(async (err, res) => {
        if (err) {
          return done(err);
        }
        done();
      });
  });
  it('should set email notices', done => {
    request(server)
      .put('/notifications/email')
      .set('Authorization', `Bearer ${creds.user.accessToken}`)
      .send({
        weeklyGoals: true
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
