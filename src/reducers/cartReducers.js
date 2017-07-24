"use strict"

// let state = { cart: [] };
export function cartReducers(state={ cart: [] }, action) {
  switch(action.type) {
    case "ADD_TO_CART":
      return { cart: [...state.cart, action.payload]};
    case 'DELETE_CART_ITEM':
      return { cart: action.payload }
    case 'UPDATE_CART':
      console.log('current state of cart is: ', state.cart);
    default:
      return state;
  }
}