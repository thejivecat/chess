import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import routes from '../shared/components/router/routes.jsx';
import Html from '../shared/components/html.jsx';
import App from '../shared/components/app.jsx';

export default function renderRouterMiddleware(req, res) {
  const branch = matchRoutes(routes, req.url);
  const promises = [];

  branch.forEach(({ route, match }) => {
    if (route.loadData) {
      promises.push(route.loadData(match));
    }
  });

  Promise.all(promises).then(data => {
    // data will be an array[] of datas returned by each promises.

    const context = data.reduce((context, data) => Object.assign(context, data), {});

    const router = <StaticRouter location={req.url} context={context}><App /></StaticRouter>;

    const app = renderToString(router);

    const html = renderToString(<Html html={app} />);

    return res.send(`<!DOCTYPE html>${html}`);
  });
}