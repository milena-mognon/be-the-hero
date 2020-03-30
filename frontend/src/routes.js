import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/components/Login';
import Register from './pages/components/Register';
import Profile from './pages/components/Profile';
import NewIncident from './pages/components/NewIncident';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}
