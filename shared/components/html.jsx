import React from 'react';

const Html = (props) => (
  <html>
    <head>
      <title>Chess App</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    </head>
    <body>
      <div id="app">{props.children}</div>
      <script type="text/javascript" src="https://unpkg.com/react@16.8.6/umd/react.development.js" />
      <script type="text/javascript" src="https://unpkg.com/react-dom@16.8.6/umd/react-dom.development.js" />
      <script type="text/javascript" src="https://unpkg.com/react-router-dom@5.0.1/umd/react-router-dom.js"></script>
      <script type="text/javascript" src="https://unpkg.com/prop-types@15.7.2/prop-types.js" />
      <script id="initial-data" type="text/plain" data-json={props.initialData}></script>
      <script src="/dynamic/main.bundle.js"></script>
    </body>
  </html>
);

export default Html;