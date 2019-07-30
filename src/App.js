import React, { Component }  from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import AddressBook from './components/AddressBook';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={Login} path="/" />
        <Route component={Register} path="/register" />
        <Route component={AddressBook} path="/address-book" />
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;