"use strict"

export function getBooks() {
  return {
    type: "GET_BOOKS"
  }
}
export function postBooks(book) {
  return {
    type: 'POST_BOOK',
    payload: book
  }
}

export function deleteBook(_id) {
  return {
    type: 'DELETE_BOOK',
    payload: { _id }
  }
}

export function updateBook(book) {
  return {
    type: 'UPDATE_BOOK',
    payload: book
  }
}