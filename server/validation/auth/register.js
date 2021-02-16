const Validator = require('validator');
const isEmpty = require('../../utils/is-empty');

module.exports = data => {
  const errors = {};

  data.username = !isEmpty(data.username) ? data.username : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (
    !Validator.isWhitelisted(
      data.username,
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    )
  ) {
    errors.username = 'INVALID_CHARACTERS';
  }

  if (!Validator.isLength(data.username, { min: 3, max: 28 })) {
    errors.username = 'NOT_LONG_ENOUGH';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'INVALID';
  }

  if (!Validator.isLength(data.password, { min: 8, max: 56 })) {
    errors.password = 'NOT_LONG_ENOUGH';
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = 'REQUIRED';
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
