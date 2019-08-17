const db = require('../../db/models');
const jwt = require('jsonwebtoken');

exports.login = function (req, res, next) { };

exports.createAccount = async function (req, res, next) {
  try {
    let user = await db.User.create(req.body);
    let { id, username, profileImageUrl } = user;
    let token = jwt({
      id,
      username,
      profileImageUrl
    }, process.env.SECRET_KEY);

    return res.status(201).json({
      id,
      username,
      profileImageUrl,
      token
    });
  } catch (error) {
    // if validation fails
    if (error.code === 11000) {
      error.message = 'Sorry that username and/or email is taken';
    }
    return next({
      status: 400,
      message: error.message,
    });
  }
};