const Validator = require('validator');
const isEmpty = require('../../utils/is-empty');

module.exports = data => {
  const errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isEmail(data.email)) {
    errors.email = 'INVALID';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'REQUIRED';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'REQUIRED';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
