"use strict"

// Add to cart
export function addToCart(book) {
  let quantityToAdd = 1;
  return {
    type: "ADD_TO_CART",
    payload: { book, quantityToAdd }
  }
}

export function deleteCartItem(_id) {
  return {
    type: 'DELETE_CART_ITEM',
    payload: { _id }
  }
}

export function addQuantityToCartItem(_id) {
  return {
    type: 'ADD_QUANTITY_CART_ITEM',
    payload: { _id }
  }
}

export function subtractQuantityToCartItem(_id) {
  return {
    type: 'SUBTRACT_QUANTITY_CART_ITEM',
    payload: { _id }
  }
}