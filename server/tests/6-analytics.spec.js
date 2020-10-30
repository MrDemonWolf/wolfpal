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
let creds = {
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
  }
};

describe('📈 Analytics:', () => {
  describe('📧 Activate account: Get all analytics', () => {
    // http://localhost:40919/wolfpal/#activate-account
  });
  describe('📧 Activate account: Get Weekly analytics', () => {
    // http://localhost:40919/wolfpal/#activate-account
  });
});
