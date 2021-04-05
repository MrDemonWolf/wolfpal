const Validator = require('validator');
const isEmpty = require('../../../utils/is-empty');

module.exports = data => {
  const codes = {};
  const errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.completeBy = !isEmpty(data.completeBy) ? data.completeBy : '';

  if (Validator.isEmpty(data.title)) {
    codes.title = 'REQUIRED';
    errors.title = 'Title is required.';
  }

  if (Validator.isEmpty(data.completeBy)) {
    codes.completeBy = 'REQUIRED';
    errors.completeBy = 'Complete By is required.';
  }

  if (Validator.isDate(data.completeBy)) {
    codes.completeBy = 'INVALID';
    errors.completeBy = 'Complete By must be a date';
  }

  return {
    codes,
    errors,
    isValid: isEmpty(errors)
  };
};
