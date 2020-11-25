const Validator = require('validator');
const isEmpty = require('../../utils/is-empty');

module.exports = data => {
  const errors = {};

  data.token = !isEmpty(data.token) ? data.token : '';
  data.code = !isEmpty(data.code) ? data.code : '';

  if (Validator.isEmpty(data.token)) {
    errors.token = 'Token is required.';
  }

  if (Validator.isEmpty(data.code)) {
    errors.code = 'Code is required.';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
