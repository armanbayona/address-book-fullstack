import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Book from './components/Book';
import AddressBook from './components/AddressBook';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Book} path="/contacts" />
        <Route component={AddressBook} path="/x" />
        <Route exact component={Login} path="/" />
        <Route component={Register} path="/register" />
      </Switch>
    </BrowserRouter>
  )
};

export default App;