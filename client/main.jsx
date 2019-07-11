import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from '../shared/components/app.jsx';
import history from '../server/history.js';


const initialData = JSON.parse(document.getElementById('initial-data').getAttribute('data-json'));

ReactDOM.hydrate(
  <Router history={history}>
    <App {...initialData} />
  </Router>
  , document.getElementById('app'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import App from '../shared/components/app.jsx';

// const renderRouter = (Component, initialData) => {
//   ReactDOM.hydrate(
//     <BrowserRouter>
//       <Component {...initialData} />
//     </BrowserRouter>, document.getElementById('root')
//   );
// };
// renderRouter(App);