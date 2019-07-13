require('dotenv').config();
const DB_URI = `${process.env.HOST}:${process.env.PORT}` || 'localhost:3000'
module.exports = {
  postgresURI: DB_URI,
  secretOrKey: 'secret'
}