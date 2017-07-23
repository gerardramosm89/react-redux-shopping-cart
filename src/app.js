"use strict"

import { createStore } from 'redux';
import reducers from './reducers/index';

// Import actions intro redux
import { addToCart } from './actions/cartActions';
import { postBooks, deleteBook, updateBook } from './actions/booksActions';
// Creating the stores
const store = createStore(reducers);

store.subscribe(function() {
  console.log('current state is: ', store.getState());
});

// Creating and dispatching actions
store.dispatch(postBooks([{
    id: 1,
    title: 'This is the book title 1', 
    description: '1 this is the description',
    price: 33.33
    }, {
    id: 2,
    title: 'This is the book title 2', 
    description: '2 this is the description',
    price: 66.33
    }])
);

// Action to delete
store.dispatch(deleteBook({ id: 1 }));

// Action to update
store.dispatch(updateBook({ 
    id: 2, title: 'Learn Redux', description: 'Updating the description a second time' 
  })
);
// store.dispatch({
//   type: 'UPDATE_BOOK',
//   payload: {
//     id: 2,
//     title: 'Learn Redux'
//   }
// });

store.dispatch(
  addToCart({
    id: 1,
    bookTitle: 'Hello World'
  })
);