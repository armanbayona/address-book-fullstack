import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import AddressBook from './components/AddressBook';

function App() {
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

export default App;