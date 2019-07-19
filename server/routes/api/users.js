const usersRouter = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../../../db/dbConfig.js');
const keys = require('../../../config/keys.js');
const { validateExistingUserInput, validateNewUserInput } = require('../../authentication/inputValidators.js');
const hashPassword = require('../../authentication/passwordValidators.js');
const sanitize = require('xss-filters');


// @route POST api/users/register
// @desc Register user
// @access Public
usersRouter.post("/create", (req, res) => {
  // Form validation
  const { errors, isValid } = validateNewUserInput(req.body);
  if (!isValid) {
    res.status(401).json(errors);
  }
  // Create new User object
  const newUser = {
    name: sanitize.uriComponentInUnQuotedAttr(req.body.name),
    email: sanitize.uriComponentInUnQuotedAttr(req.body.email),
    password: sanitize.uriComponentInUnQuotedAttr(req.body.password)
  };
  // db search for user, sends error message if user found with matching email
  db('users').select('*').where({ email: newUser.email }, '*').then(user => {
    if (user.length) {
      throw { emailError: 'user with that email already exists' };
    } else {
      return db('users').select('*').where({ name: newUser.name });
    }
  })
    .then(user => {
      if (user.length) {
        throw { nameError: 'user with that name already exists' };
      } else {
        // Hash password and save it to db
        return hashPassword(newUser.password);
      }
    })
    .then((hash) => {
      newUser.password = hash;
      return db('users').insert(newUser, '*');
    })
    .then((user) => {
      // user successfully created
      user = user[0];
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
          res.status(201).json({
            success: true,
            token: `Bearer ${token}`
          });
        }
      );
    })
    .catch(error => res.status(404).json(error.nameError || error.emailError ? error : { nameError: 'oops something went wrong, please try again' }));
});


// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
usersRouter.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateExistingUserInput(req.body);
  if (!isValid) {
    res.status(404).json(errors);
  }
  // get user credentials
  let { email, password } = req.body;
  email = sanitize.uriComponentInUnQuotedAttr(email);
  password = sanitize.uriComponentInUnQuotedAttr(password);

  // Find user by email
  db('users').select('*').where({ email }, '*')
    .then(user => {
      if (!user.length) {
        throw 'email and password don\'t match';
      } else {

      user = user[0];
      // check password
      return bcrypt.compare(password, user.password)
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
                res.status(202).json({
                  success: true,
                  token: `Bearer ${token}`
                });
              }
            );
          }
        })
      }
     })
     .catch(error => res.status(404).json({ passwordError: error }));
});

module.exports = usersRouter;