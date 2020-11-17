const Validator = require('validator');
const isEmpty = require('../../utils/is-empty');

module.exports = data => {
  // eslint-disable-next-line prefer-const
  let errors = {};

  data.weeklyGoals = !isEmpty(data.weeklyGoals)
    ? data.weeklyGoals.toString()
    : '';

  if (Validator.isEmpty(data.weeklyGoals)) {
    errors.weeklyGoals = 'Weekly Goals is required.';
  }

  if (!Validator.isBoolean(data.weeklyGoals)) {
    errors.weeklyGoals = 'Weekly Goals must be a boolean';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
