import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import "babel-polyfill";
import './localization/i18n';

import reducer from './reducers';
import App from "./routes/App";

const initialState = {
  // 'language': localStorage.getItem('language') || 'en',
  'pokemons': [],
  'myPokemons': [],
};
const store = createStore(reducer, initialState);
const $AppContainer = document.getElementById("app");

render(
  <Provider store={store}>
    <App />
  </Provider>, 
  $AppContainer
);
