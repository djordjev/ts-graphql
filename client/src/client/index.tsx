import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './app/App';
import { BrowserRouter } from 'react-router-dom';

const app: React.ReactElement = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.hydrate(app, document.getElementById('root'));

declare let module: any;
document.getElementById('root');
if (module.hot) {
  module.hot.accept();
}
