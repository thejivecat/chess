// IMPORTS
//
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import cors from 'cors';
// import renderRouterMiddleware from '../iso-middleware/renderRoutes.jsx';
import renderPage from './render.js';
import history from './history.js';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Router } from 'react-router-dom';
import Html from '../shared/components/html.jsx';
import App from '../shared/components/app.jsx';

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
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});


// SERVE BUNDLE
//
const buildPath = path.join(__dirname, '../', 'build');
app.use('/static', express.static(buildPath));

// const buildPath = path.join(__dirname, '../', 'build');
// app.use('/', express.static(buildPath));
// app.use(express.static(__dirname));

// app.get('*', renderRouterMiddleware);


// INDEX ROUTE
//
app.get('/', (req, res) => {
  renderPage(({ initialData, style }) => {
    ReactDOMServer.renderToNodeStream(
      <Html style={style} initialData={JSON.stringify(initialData)}>
        <Router history={history}>
          <App {...initialData} name="Chess" />
        </Router>
      </Html>
    ).pipe(res);
  });
});



// SERVE
//
app.listen(port, (err) => {
  err ?
    console.error(err)
    :
    console.log(`Listening on localhost:${port}`);
});