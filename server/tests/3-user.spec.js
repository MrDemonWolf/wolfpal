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

describe('🧑 User:', () => {
  describe('🔓 Activate account', () => {
    describe('📧 Activate account: email verification', () => {
      // http://localhost:40919/wolfpal/#activate-account
    });
    describe('📧 Activate account: email verification resend', () => {
      // http://localhost:40919/wolfpal/#activate-account
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
