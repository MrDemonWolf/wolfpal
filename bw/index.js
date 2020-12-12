const consola = require('consola');
const mongoose = require('mongoose');
const cron = require('node-cron');

/**
 * Load environment variables from the .env file, where API keys and passwords are stored.
 */
require('dotenv').config();

/**
 * Connect to MongoDB.
 */
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DATABASE_URI, {
  useNewUrlParser: true
});
const db = mongoose.connection;

db.once('open', () => {
  /**
   *  Log infomation after everything is started.
   */
  if (process.env.NODE_ENV !== 'test') {
    consola.log('----------------------------------------');
    consola.info(`Environment: ${process.env.NODE_ENV || 'development'}`);
    consola.info('Background service worker is ready');
    consola.log('----------------------------------------');
    consola.log('');
  }
});

/**
 * Cloes connection to mongodb on exit.
 */
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    consola.success(
      'Mongoose connection is disconnected due to application termination'
    );
    process.exit(0);
  });
});

/**
 * Load in the tasks to run
 */
const emailWeeklyGoals = require('./tasks/email/weeklyGoals');

/**
 * Run weekly goal email every week on saturday
 * 2020-12-12 00:00:00 UTC
 * 2020-12-19 00:00:00 UTC
 */
cron.schedule('0 0 7 * 6', async () => {
  consola.log('----------------------------------------');
  consola.success('Sending weekly goals emails to users');
  await emailWeeklyGoals();
  consola.log('----------------------------------------');
});
