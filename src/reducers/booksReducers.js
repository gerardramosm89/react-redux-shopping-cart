// Defining reducers

// Initiating state
let books = { books: [{
      _id: 1,
      title: 'This is the book title 1', 
      description: '1 this is the description',
      price: 33.33
      }, {
      _id: 2,
      title: 'This is the book title 2', 
      description: '2 this is the description',
      price: 66.33
      }
    ]};
    
export function booksReducers(state=books, action) {
  switch(action.type) {
    case "GET_BOOKS":
      return { ...state, books: [...state.books]}
    case "POST_BOOK":
      return { books: [...state.books, ...action.payload]}
      break;
    case "DELETE_BOOK":
      const books = [...state.books];
      const indexToDelete = books.findIndex((book) => {
        return book._id === action.payload._id;
      });
      books.splice(indexToDelete, 1);
      return { books }
    case "UPDATE_BOOK":
      const booksThatWillUpdate = [...state.books];
      const indexToUpdate = booksThatWillUpdate.findIndex(book => {
        return book._id === action.payload._id;
      });
      booksThatWillUpdate[indexToUpdate].title = action.payload.title;
      booksThatWillUpdate[indexToUpdate].description = action.payload.description;      
      return { books: booksThatWillUpdate }
    default:
      return state;
  }
}