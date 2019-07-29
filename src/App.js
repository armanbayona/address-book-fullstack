import React, { Component }  from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={Login} path="/" />
        <Route component={Register} path="/register" />
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;