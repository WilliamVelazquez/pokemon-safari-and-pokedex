import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Pokedex from '../containers/Pokedex';
import PC from '../containers/PC';
import NotFound from '../containers/NotFound';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Pokedex} />
      <Route exact path='/pc' component={PC} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
