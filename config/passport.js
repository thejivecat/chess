const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const db = require('../db/dbConfig.js');
const keys = require('./keys.js');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      db('users').select('*').where({ id: jwt_payload.id })
        .then(user => {
          if (user.length) {
            return done(null, user[0]);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};