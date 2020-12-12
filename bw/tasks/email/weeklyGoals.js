const consola = require('consola');

const sendgrid = require('../../config/sendgrid');

/**
 * Load MongoDB models.
 */
const User = require('../../models/User');
const WeeklyGoal = require('../../models/Goals/Weekly');

/**
 * Load Email Templates.
 */
const weeklyGoalsTemplate = require('../../emails/weeklyGoals');

/**
 * Load Utils
 */
const percentCal = require('../../utils/percentageCal');

module.exports = async () => {
  /**
   * Find all users who have email notifications enabled for Weekly Goals
   */
  const users = await User.find({
    'notifications.email.weeklyGoals': { $ne: false }
  });

  if(users.length === 0) {
    return consola.log('No one will get a email.');
  }

  users.map(async user => {
    /**
     * Get weekly goals completed count
     */
    const weeklyGoalsCompleted = await WeeklyGoal.find({
      user: user.id,
      isCompleted: { $ne: false }
    }).countDocuments();

    /**
     * Get weekly goals total count
     */
    const weeklyGoalsTotal = await WeeklyGoal.find({
      user: user.id
    }).countDocuments();

    /**
     * Get the weekly goal percent
     */
    const weeklyGoalsCompletedPercent = percentCal(
      weeklyGoalsCompleted,
      weeklyGoalsTotal
    );

    /**
     * Setup email template
     */
    const emailTemplate = weeklyGoalsTemplate(
      weeklyGoalsCompleted,
      weeklyGoalsTotal,
      weeklyGoalsCompletedPercent
    );
    const msg = {
      to: user.email,
      from: `${process.env.EMAIL_FROM} <noreply@${process.env.EMAIL_DOMAIN}>`,
      subject: `Your weekly goal stats on ${process.env.SITE_TITLE}`,
      html: emailTemplate.html
    };

    if (process.env.NODE_ENV !== 'test') await sendgrid.send(msg);
    consola.log(`Sent email to: ${user.username} at ${Date.now()}`);
  });
};
