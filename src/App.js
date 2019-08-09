import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Book from './components/Book';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={Login} path="/" />
        <Route component={Register} path="/register" />
        <Route component={Book} path="/book" />
      </Switch>
    </BrowserRouter>
  )
};

export default App;