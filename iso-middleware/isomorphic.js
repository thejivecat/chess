import renderPage from './render.js';
import history from './history.js';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOMServer from 'react-dom/server';
import { Router } from 'react-router-dom';
import store from '../store/store.js';
import Html from '../shared/components/html.jsx';
import App from '../shared/components/app.jsx';


export default function isomorphicMiddleware(req, res) {
  const { url } = res.locals;
  renderPage(({ initialData }) => {
    ReactDOMServer.renderToNodeStream(
      <Provider store={store}>
        <Html initialData={JSON.stringify(initialData)}>
          <Router history={history}>
            <App {...initialData} url={url} name="Chess" />
          </Router>
        </Html>
      </Provider>
    ).pipe(res);
  });
}
