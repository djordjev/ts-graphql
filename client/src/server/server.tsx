import * as express from 'express';
import { App } from '../client/app/App';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

const buildHTML = (app: string): string => {
  return `
  <!doctype html>
  <html>
      <head>
          <title>Typescript and Graphql</title>
      </head>
      <body>
          <div id='root'>${app}</div>
          <script src='/js/app.bundle.js'></script>
          <link rel="stylesheet" type="text/css" href="app.css">
      </body>
  </html>
`;
};

const serverRenderer = () => (req: express.Request, res: express.Response): void => {
  const context: object = {};
  const app: React.ReactElement = (
    <StaticRouter context={context} location={req.url}>
      <App />
    </StaticRouter>
  );
  const appString: string = renderToString(app);
  res.send(buildHTML(appString));
};

export default serverRenderer;
