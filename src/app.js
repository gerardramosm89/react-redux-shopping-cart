"use strict"
// Creating react
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';



import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers/index';

const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import BooksList from './components/pages/booksList';

render(
  <Provider store={store}>
    <BooksList />
  </Provider>, document.getElementById('app')
);