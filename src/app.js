"use strict"

import { createStore } from 'redux';

// Defining reducers
const reducer = function(state={books: []}, action) {
  switch(action.type) {
    case "POST_BOOK":
      return { books: [...state.books, ...action.payload]}
      break;
  }
}

// Creating the stores
const store = createStore(reducer);

store.subscribe(function() {
  console.log('current state is: ', store.getState());
});

// Creating and dispatching actions
store.dispatch({ 
  type: 'POST_BOOK', 
  payload: [{
    id: 1,
    title: 'This is the book title 1', 
    description: '1 this is the description',
    price: 33.33
    }, {
    id: 2,
    title: 'This is the book title 2', 
    description: '2 this is the description',
    price: 66.33
    }]
  }
);

// Dispatching a second action

store.dispatch({ 
  type: 'POST_BOOK', 
  payload: [{
    id: 3,
    title: 'This is the 3rd book title', 
    description: 'This is the description of the third book',
    price: 33.33
    }
  ]
});