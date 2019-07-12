const io = require('./server.js')
const { VERIFY_USER, CREATE_USER, USER_CONNECTED, LOGOUT } = require('./socketEvents.js');
const auth = require('./authentication/authManagement.js');
const connectedUser = {};



module.exports = function (socket) {
  console.log(`Socket id is ${socket.id}`);

  socket.on(VERIFY_USER, (user, callback) => {
    auth.validateExistingUser(user)
      .then(() => callback(null))
      .catch((error) => callback(error));
  });

  socket.on(CREATE_USER, (user, callback) => {
    auth.createNewUser(user)
      .then(() => callback(null))
      .catch((error) => callback({ error }));
  });
}