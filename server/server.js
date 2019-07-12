// IMPORTS
//
import dotenv from 'dotenv';
import http from 'http';
import express from 'express';
import cors from 'cors';
import path from 'path';
import socketManager from './socketManager.js';
import isomorphicMiddleware from '../iso-middleware/isomorphic.js';

const socketIo = require('socket.io');

// SETUP
//
dotenv.config();
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = process.env.PORT || 8080;



// MIDDLEWARE
//
app.use(cors());


// LOAD GZIP BUNDLE
//
// app.get('*.js', function (req, res, next) {
//   req.url = req.url + '.gz';
//   res.set('Content-Encoding', 'gzip');
//   next();
// });


// SERVE BUNDLE
//
const buildPath = path.join(__dirname, '../', 'build');
app.use('/dynamic', express.static(buildPath));
app.use(express.static(__dirname));

// SET URL
//
app.use((req, res, next) => {
  res.locals.url = `${process.env.HOST}:${process.env.PORT}` || 'localhost:3000';
  next();
})

// INDEX ROUTE
//
app.use(isomorphicMiddleware);


// SOCKET.io
//
io.on('connection', socketManager);


// SERVE
//
server.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});

// EXPORT io OBJECT
//
export default io;