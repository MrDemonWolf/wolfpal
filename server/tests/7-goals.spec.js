const request = require('supertest');
const moment = require('moment');

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
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          module.exports.weeklyGoal = res.body.goal;
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
        // eslint-disable-next-line no-underscore-dangle
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
        // eslint-disable-next-line no-underscore-dangle
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
  describe('Yearly Goals', () => {
    it('Create yearly goal', done => {
      request(server)
        .post('/goals/yearly')
        .set('Authorization', `Bearer ${creds.user.accessToken}`)
        .send({
          title: 'Get WolfPal done.',
          completeBy: moment().add(180, 'days')
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          module.exports.yearlyGoal = res.body.goal;
          done();
        });
    });
    it('Get list of yearly goals', done => {
      request(server)
        .get('/goals/yearly')
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
    it('Remove yearly goal', done => {
      request(server)
        // eslint-disable-next-line no-underscore-dangle
        .delete(`/goals/yearly/${this.yearlyGoal._id}`)
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
