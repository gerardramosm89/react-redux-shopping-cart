"use strict"

// let state = { cart: [] };
export function cartReducers(state={ cart: [] }, action) {
  switch(action.type) {
    case "ADD_TO_CART":
      console.log('...state is: ', ...state);
      console.log('action.payload is: ', action.payload);
      return { cart: [...state.cart, action.payload]};
    default:
      return state;
  }
}