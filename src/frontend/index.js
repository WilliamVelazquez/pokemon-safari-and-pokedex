import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import 'babel-polyfill';
import './localization/i18n';

import reducer from './reducers';
import App from './routes/App';
// import initialState from './initialState';
import { isServer } from 'Utils/functions';

if (typeof window !== 'undefined') {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const preloadedState = window.__PRELOADED_STATE__;
  const store = createStore(reducer, preloadedState, composeEnhancers());

  const history = createBrowserHistory();

  const $AppContainer = document.getElementById('app');

  hydrate(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    $AppContainer,
  );
}
