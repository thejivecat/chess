const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/chess', {
  keepAlive: true,
  useNewUrlParser: true,
});

module.exports.User = require('./users.js');