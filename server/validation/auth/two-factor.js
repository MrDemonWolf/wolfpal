const Validator = require('validator');
const isEmpty = require('../../utils/is-empty');

module.exports = data => {
  const errors = {};

  data.token = !isEmpty(data.token) ? data.token : '';
  data.code = !isEmpty(data.code) ? data.code : '';

  if (Validator.isEmpty(data.token)) {
    errors.token = 'REQUIRED';
  }

  if (Validator.isEmpty(data.code)) {
    errors.code = 'REQUIRED';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
