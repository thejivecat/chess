const bcrypt = require('bcryptjs');
const validator = require('validator');

const isPasswordStrong = password => {
  if (!(/[A-Z]/).test(password)) {
    return 'must contain at least one uppercaseLetter';
  } else if (!(/[a-z]/).test(password)) {
    return 'must contain at least one lowercase letter';
  } else if (!(/[0-9]/).test(password)) {
    return 'must contain at least one number';
  } else if (password.length < 8) {
    return 'password must be at least 8 characters';
  }
  return null;
};

const validatePasswords = (one, two) => {
  if (one !== two) {
    return 'passwords do not match';
  }
  return isPasswordStrong(one);
};

// TODO
const validateEmail = email => validator.isEmail(email) ? null : 'email must be actual email';

const validateNewUserInput = ({ password, password2, name, email }) => {
  const passwordError = validatePasswords(password, password2);
  const nameError = name.length < 6 ? 'user name must be at least 6 characters long' : null;
  const emailError = validateEmail(email);
  const errors = { passwordError, nameError, emailError };

  return {
    errors,
    isValid: Object.keys(errors).every(key => !errors[key])
  }
};

const validateExistingUserInput = ({ email, password }) => {
  const errors = { passwordError: isPasswordStrong(password), emailError: validateEmail(email) };

  return {
    errors,
    isValid: Object.keys(errors).every(key => !errors[key])
  }
};

module.exports = {
  validateNewUserInput,
  validateExistingUserInput,
};