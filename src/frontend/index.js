import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import 'babel-polyfill';
import './localization/i18n';

import { INITIAL_POKEMON_NUMBER } from 'Constants/app';

import reducer from './reducers';
import App from './routes/App';

const initialState = {
  // 'language': localStorage.getItem('language') || 'en',
  'pokemons': [],
  'myPokemons': [],
  'initialPokemon': INITIAL_POKEMON_NUMBER,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());
const $AppContainer = document.getElementById('app');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  $AppContainer,
);
