"use strict"
import { createStore } from 'redux';

// Defining reducers
const reducer = function(state={}, action) {
  switch(action.type) {
    case "POST_BOOK":
      return state = action.payload;
      break;
  }
}

// Creating the stores
const store = createStore(reducer);

store.subscribe(function() {
  // console.log(`current state is: ${store.getState()}`)
  console.log('current state is: ', store.getState());
});

// Creating and dispatching actions
store.dispatch({ 
  type: 'POST_BOOK', 
  payload: {
    id: 1,
    title: 'This is the book title', 
    description: 'this is the description',
    price: 33.33
  }});