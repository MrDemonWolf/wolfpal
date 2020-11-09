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
  }
};

describe('💾 Account:', () => {
  describe('📲 Account: Get Account details', () => {});
  describe('✉ Account: Email Change', () => {});
  describe('✉ Account: Email Change resend', () => {});
  describe('✉ Account: Email Change with token', () => {});
  describe('🔑 Account: Password Change', () => {});
});
