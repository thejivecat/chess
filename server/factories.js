const uuid = require('uuid/v4');

const createUser = ({ name = '' } = {}) => ({
  id: uuid(),
  name
});

const createMessage = ({ message = '', sender = '' } = {}) => ({
  id: uuid(),
  time: new Date(Date.now()),
  message,
  sender
});

const createChat = ({ messages = [], name = 'Community', user = [] } = {}) => ({
  id: uuid(),
  messages,
  name,
  user
});

const getTime = date => date.toLocalDateString('en-US', { month: 'numeric', day: 'numeric' });

module.exports = {
  createUser,
  createMessage,
  createChat,
  getTime
}