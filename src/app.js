"use strict"
// Creating react
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';




// Redux
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
// Middleware
import logger from 'redux-logger';
// Redux continued
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import BooksList from './components/pages/booksList';
import Menu from './components/menu';
import Footer from './components/footer';

render(
  <Provider store={store}>
    <div>
      <Menu />
      <BooksList />
      <Footer />
    </div>
  </Provider>, document.getElementById('app')
);