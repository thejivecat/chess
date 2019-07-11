// IMPORTS
//
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import cors from 'cors';
import isomorphicMiddleware from '../iso-middleware/isomorphic.js';

// SETUP
//
dotenv.config();
const app = express();
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


// INDEX ROUTE
//
app.use(isomorphicMiddleware);



// SERVE
//
app.listen(port, (err) => {
  err ?
    console.error(err)
    :
    console.log(`Listening on localhost:${port}`);
});