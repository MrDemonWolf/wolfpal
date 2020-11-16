const Validator = require('validator');
const isEmpty = require('../../utils/is-empty');

module.exports = data => {
  const errors = {};

  data.oldPassword = !isEmpty(data.oldPassword) ? data.oldPassword : '';
  data.newPassword = !isEmpty(data.newPassword) ? data.newPassword : '';
  if (Validator.isEmpty(data.oldPassword)) {
    errors.oldPassword = 'Old Password is required.';
  }

  if (Validator.isEmpty(data.newPassword)) {
    errors.newPassword = 'New Password is required.';
  }

  if (!Validator.isLength(data.newPassword, { min: 8, max: 56 })) {
    errors.newPassword =
      'New Password must be between 8 and 56 characters long';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
