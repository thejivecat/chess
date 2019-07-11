import renderPage from './render.js';
import history from './history.js';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Router } from 'react-router-dom';
import Html from '../shared/components/html.jsx';
import App from '../shared/components/app.jsx';

export default function isomorphicMiddleware(req, res) {
  renderPage(({ initialData }) => {
    ReactDOMServer.renderToNodeStream(
      <Html initialData={JSON.stringify(initialData)}>
        <Router history={history}>
          <App {...initialData} name="Chess" />
        </Router>
      </Html>
    ).pipe(res);
  });
}
