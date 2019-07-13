const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../../../db/dbConfig.js');
const keys;
const { validateExistingUserInput, validateNewUserInput } = require('../../authentication/inputValidators.js');
const hashPassword = require('../../authenication/passwordValidators.js');


// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/create", (req, res) => {
  // Form validation
  const { errors, isValid } = validateNewUserInput(req.body);
  if (!isValid) {
    res.status(404).json(errors);
  }

  // Create new User object
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };

  // db search for user, sends error message if user found with matching email
  db('users').select('*').where({ email: newUser.email }).then(user => {
    if (user.length) {
      res.status(400).json({ emailError: 'user with that email already exists' })
    } else {
      return db('users').select('*').where({ name: newUser.name });
    }
  })
    .then(user => {
      if (user.length) {
        res.status(400).json({ nameError: 'user with that name already exists' })
      } else {

        // Hash password and save it to db
        return hashPassword(newUser.password);
      }
    })
    .then((hash) => {
      newUser.password = hash;
      return db('users').insert(newUser);
    })
    .then((user) => res.status(201).json(user[0]))
    .catch(error => res.status(400).json({ nameError: 'oops something went wrong, please try again' }));
});


// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateExistingUserInput(req.body);
  if (!isValid) {
    res.status(404).json(errors);
  }
  // get user credentials
  const { email, password } = req.body;

  // Find user by email
  db('users').select('*').where({ email })
    .then(user => {
      if (!user.length) throw 'email and password don\'t match';
      user = user[0];
      // check password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) {
            throw 'email and password don\'t match';
          } else {
            // passwords match, create JWT payload
            const payload = {
              id: user.id,
              name: user.name,
            };

            // Sign token
            jwt.sign(
              payload,
              keys.secretOrKey,
              {
                expiresIn: 3600, // 1 hour
              },
              (error, token) => {
                res.status(200).json({
                  success: true,
                  token: `Bearer ${token}`
                });
              }
            );
          }
        })
        .catch(error => res.status(400).json({ passwordError: error }));
    });
});

module.exports = router;