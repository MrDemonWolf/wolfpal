const Validator = require('validator');
const isEmpty = require('../../utils/is-empty');

module.exports = data => {
  const codes = {};
  const errors = {};

  data.weeklyGoals = !isEmpty(data.weeklyGoals)
    ? data.weeklyGoals.toString()
    : '';
  data.yearlyGoals = !isEmpty(data.yearlyGoals)
    ? data.yearlyGoals.toString()
    : '';

  if (Validator.isEmpty(data.weeklyGoals)) {
    codes.weeklyGoals = 'REQUIRED';
    errors.weeklyGoals = 'Weekly Goals is required.';
  }

  if (Validator.isEmpty(data.yearlyGoals)) {
    codes.yearlyGoals = 'REQUIRED';
    errors.yearlyGoals = 'Yearly Goals is required.';
  }

  if (!Validator.isBoolean(data.weeklyGoals)) {
    codes.weeklyGoals = 'BOOLEAN';
    errors.weeklyGoals = 'Weekly Goals must be a boolean';
  }
  if (!Validator.isBoolean(data.yearlyGoals)) {
    codes.yearlyGoals = 'BOOLEAN';
    errors.yearlyGoals = 'Yearly Goals must be a boolean';
  }

  return {
    codes,
    errors,
    isValid: isEmpty(errors)
  };
};
