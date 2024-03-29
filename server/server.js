// IMPORTS
//
import "regenerator-runtime/runtime";
import dotenv from 'dotenv';
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import cors from 'cors';
import path from 'path';
// socket.io
import socketManager from './socketManager.js';
// serverside rendering function
import isomorphicMiddleware from '../iso-middleware/isomorphic.js';
// auth routes
import authRoutes from './routes/auth.js';
// error handler
import errorHandler from './handlers/errorHandler.js';

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
// app.use(passport.initialize());
// //passport config
// require('../config/passport.js')(passport);
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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
// const buildPath = path.join(__dirname, '../', 'build');
// app.use('/dynamic', express.static(buildPath));
// app.use(express.static(__dirname));


// SET URL
//
// app.use((req, res, next) => {
//   res.locals.url = `${process.env.HOST}:${process.env.PORT}` || 'localhost:3000';
//   next();
// })

// INDEX ROUTE
//
// app.use(isomorphicMiddleware);


// ROUTES
//
app.use('/api/auth', authRoutes);


// SOCKET.io
//
// io.on('connection', socketManager);


// ERRORS
//
app.use((req, res, next) => {
  let error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use(errorHandler);


// SERVE
//
server.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});

// EXPORT io OBJECT
//
export default io;