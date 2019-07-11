// import React from 'react';

const Html = (props) => (
  <html>
    <head>
      <title>Chess App</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"
      />
    </head>
    <body>

      <style>{props.style}</style>
      <div id="app">{props.children}</div>
      <script id="initial-data" type="text/plain" data-json={props.initialData}></script>
      <script type="text/javascript" src="https://unpkg.com/react@16.8.6/umd/react.development.js" />
      <script type="text/javascript" src="https://unpkg.com/react-dom@16.8.6/umd/react-dom.development.js" />
      <script type="text/javascript" src="https://unpkg.com/react-router-dom@5.0.1/umd/react-router-dom.js"></script>
      <script type="text/javascript" src="https://unpkg.com/prop-types@15.7.2/prop-types.js" />
      <script src="/static/main.bundle.js"></script>
    </body>
  </html>
);

export default Html;

// import React from 'react';

// const Html = (props) => (
//   <html lang="en">
//     <head>
//       <title>Isomorphic Router Demo</title>
//       <link
//         rel="stylesheet"
//         href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"
//       />
//     </head>
//     <body>
//       <div
//         id="root"
//         dangerouslySetInnerHTML={{ __html: props.html }}
//       />
//       <script dangerouslySetInnerHTML={{
//         __html:
//           `window.__SERIALIZED_STATE__ =
//               JSON.stringify(${props.serverState})`
//       }}
//       />
//       <script type="application/javascript" src="/main.bundle.js" />
//     </body>
//   </html>
// );

// export default Html;