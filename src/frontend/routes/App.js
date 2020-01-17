import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Pokedex from '../containers/Pokedex';
import PC from '../containers/PC';
import NotFound from '../containers/NotFound';

const App = () => {
  const { i18n } = useTranslation();
  const [initialized, setInitialized] = useState(false);
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    if (!initialized) {
      changeLanguage(localStorage.getItem('language') || 'en');
      setInitialized(true);
    }
  }, [initialized]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Pokedex} />
        <Route exact path='/pc' component={PC} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
