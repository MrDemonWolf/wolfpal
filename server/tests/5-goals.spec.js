const request = require('supertest');

const server = require('../index');

/**
 * Load Configs
 */
const testAccounts = require('./data/testAccounts');

/**
 * Create a empty object for creds to be used later
 */
// eslint-disable-next-line prefer-const
let creds = {
  user: {
    accessToken: '',
    refreshToken: ''
  }
};
describe('Goals 🥅', () => {
  describe('🔓 login', () => {
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
  });
  describe('Weekly Goals', () => {
    it('Create weekly goal', done => {
      request(server)
        .post('/goals/weekly')
        .set('Authorization', `Bearer ${creds.user.accessToken}`)
        .send({
          title: 'Get WolfPal done.'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          module.exports.weeklyGoal = res.body.weeklyGoal;
          done();
        });
    });
    it('Get list of weekly goals', done => {
      request(server)
        .get('/goals/weekly')
        .set('Authorization', `Bearer ${creds.user.accessToken}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });
    it('Mark weekly goal as complete', done => {
      request(server)
        .put(`/goals/weekly/${this.weeklyGoal._id}/complete`)
        .set('Authorization', `Bearer ${creds.user.accessToken}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });
    it('Remove weekly goal', done => {
      request(server)
        .delete(`/goals/weekly/${this.weeklyGoal._id}`)
        .set('Authorization', `Bearer ${creds.user.accessToken}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });
});
