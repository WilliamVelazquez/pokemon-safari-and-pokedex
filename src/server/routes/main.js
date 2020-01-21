import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import 'babel-polyfill';
import '../../frontend/localization/i18n';

import Routes from '../../frontend/routes/serverRoutes';
import reducer from '../../frontend/reducers';
import initialState from '../../frontend/initialState';
import render from '../render';

const main = (request, response, next) => {
  try {
    const store = createStore(reducer, initialState);
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter location={request.url} context={{}}>
          {renderRoutes(Routes)}
        </StaticRouter>
      </Provider>,
    );
    const preloadedState = store.getState();
    response.send(render(html, preloadedState));
  } catch (error) {
    next(error);
  }
};

export default main;
