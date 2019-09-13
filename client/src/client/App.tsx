import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './auth/pages/Login/Login';
import Signup from './auth/pages/Signup/Signup';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <h1>Applications</h1>
        <Route path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Router>
    );
  }
}

export default App;
