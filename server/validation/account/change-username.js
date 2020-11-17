const Validator = require('validator');
const isEmpty = require('../../utils/is-empty');

module.exports = data => {
  const errors = {};

  data.username = !isEmpty(data.username) ? data.username : '';

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Username is required.';
  }

  if (
    !Validator.isWhitelisted(
      data.username,
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    )
  ) {
    errors.username =
      'Username is invalid. Must only contain numbers or letters.';
  }

  if (!Validator.isLength(data.username, { min: 3, max: 28 })) {
    errors.username = 'Username must be between 3 and 28 characters long';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
