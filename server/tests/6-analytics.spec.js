const request = require('supertest');

const server = require('../index');

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
  }
};

describe('📈 Analytics:', () => {
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
  it('should  get analytics on all goals.', done => {
    request(server)
      .get('/analytics')
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
  it('should  get analytics on weekly goals.', done => {
    request(server)
      .get('/analytics/weekly')
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
});
