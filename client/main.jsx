import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import App from '../shared/components/app.jsx';
import store from '../store/store.js';
import history from '../iso-middleware/history.js';

const initialData = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));

console.log(history, 'history');

ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App {...initialData} />
    </Router>
  </Provider>
  , document.getElementById('app'));