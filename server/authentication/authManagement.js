
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
const validateEmail = email => null;

const validateNewUserCredentials = ({ password, password2, name, email }) => {
  const passwordsError = validatePasswords(password, password2);
  const nameError = name.length < 6 ? 'user name must be at least 6 characters long' : null;
  const emailError = validateEmail(email);
  const error = passwordsError || nameError || emailError;

  return new Promise((resolve, reject) => {
    if (!error) resolve(true);
    else reject(error);
  })
};

const createNewUser = (user) => {
  return validateNewUserCredentials(user)
    .then(() => true)
    // TODO
    // db look if email or name exist
    // if they dont create new user
    .catch((error) => error);
};

const validateExistingUser = (email, password) => {
  // TODO
  // database lookup
  return new Promise((resolve, reject) => resolve(true));
};

module.exports = {
  createNewUser,
  validateExistingUser,
};