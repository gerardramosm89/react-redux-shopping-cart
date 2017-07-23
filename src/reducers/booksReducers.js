// Defining reducers
export function booksReducers(state={books: []}, action) {
  switch(action.type) {
    case "POST_BOOK":
      return { books: [...state.books, ...action.payload]}
      break;
    case "DELETE_BOOK":
      const books = [...state.books];
      const indexToDelete = books.findIndex((book) => {
        return book.id === action.payload.id;
      });
      books.splice(indexToDelete, 1);
      return { books }
    case "UPDATE_BOOK":
      const booksThatWillUpdate = [...state.books];
      const indexToUpdate = booksThatWillUpdate.findIndex(book => {
        return book.id === action.payload.id;
      });
      booksThatWillUpdate[indexToUpdate].title = action.payload.title;
      return { books: booksThatWillUpdate }
    default:
      return state;
  }
}