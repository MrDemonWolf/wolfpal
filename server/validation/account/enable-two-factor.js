const Validator = require('validator');
const isEmpty = require('../../utils/is-empty');

module.exports = data => {
  let error = null;

  data.code = !isEmpty(data.code) ? data.code : '';

  if (Validator.isEmpty(data.code)) {
    error = 'Code is required.';
  }

  return {
    error,
    isValid: isEmpty(error)
  };
};
