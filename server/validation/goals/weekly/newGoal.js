const Validator = require('validator');
const isEmpty = require('../../../utils/is-empty');

module.exports = data => {
  let error = {};

  data.title = !isEmpty(data.title) ? data.title : '';

  if (Validator.isEmpty(data.title)) {
    error = 'Goal is required.';
  }

  return {
    error,
    isValid: isEmpty(error)
  };
};
