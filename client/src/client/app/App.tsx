import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Login } from '../auth/pages/login/Login';
import { Signup } from '../auth/pages/signup/Signup';

import '../styles/colors.css';

const App = () => (
  <Switch>
    <Route exact component={Login} path="/" />
    <Route exact component={Login} path="/login" />
    <Route exact component={Signup} path="/signup" />
  </Switch>
);
export { App };
