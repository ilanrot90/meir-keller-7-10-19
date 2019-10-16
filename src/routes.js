import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Favorites from './components/Favorites';
import Home from './components/Home';
import { BASE_URL } from './utils/constants';

export default () => {
  return (
    <Router basename={BASE_URL}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favorites" exact component={Favorites} />
      </Switch>
    </Router>
  );
};
