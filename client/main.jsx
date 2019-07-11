import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from '../shared/components/app.jsx';
import history from '../iso-middleware/history.js';

const initialData = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));

console.log(history, 'history');

ReactDOM.hydrate(
  <Router history={history}>
    <App {...initialData} />
  </Router>
  , document.getElementById('app'));