import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/components/Login';
import Register from './pages/components/Register';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
