"use strict"

// Add to cart
export function addToCart(book) {
  return {
    type: "ADD_TO_CART",
    payload: book
  }
}

export function deleteCartItem(cart) {
  return {
    type: 'DELETE_CART_ITEM',
    payload: cart
  }
}

export function updateCartItem(_id) {
  return {
    type: 'UPDATE_CART_ITEM',
    payload: _id
  }
}