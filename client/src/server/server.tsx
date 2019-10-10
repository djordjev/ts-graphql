import * as express from 'express';
import { App } from '../client/App';
import * as React from 'react';
import { renderToString } from 'react-dom/server';

const serverRenderer = (options: any) => (
  req: express.Request,
  res: express.Response
): void => {
  res.send(`
    <!doctype html>
    <html>
        <head>
            <title>Typescript and Graphql</title>
        </head>
        <body>
            <div id='root'>${renderToString(<App />)}</div>
            <script src='/js/app.bundle.js'></script>
        </body>
    </html>
`);
};

export default serverRenderer;
