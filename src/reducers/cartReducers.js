"use strict"

// let state = { cart: [] };
export function cartReducers(state={ cart: [], cartQuantity: 0 }, action) {
  let newQuantity;
  switch(action.type) {
    case 'ADD_TO_CART':
      console.log('state.cartQuantity is: ', state.cartQuantity);
      newQuantity = state.cartQuantity += 1;      
      return { ...state, cart: [...state.cart, action.payload.book], cartQuantity: newQuantity };
    case 'DELETE_CART_ITEM':
      const indexToDelete = [...state.cart].findIndex(function(cartItem) {
        return cartItem._id === action.payload._id; 
      });
      const deleted = [...state.cart];
      deleted.splice(indexToDelete, 1);
      return { cart: deleted }
    case 'ADD_QUANTITY_CART_ITEM':
      console.log('state.cartQuantity is: ', state.cartQuantity);    
      let itemsThatWillUpdate = [...state.cart];
      let indexToUpdate = itemsThatWillUpdate.findIndex(cartItem => cartItem._id == action.payload._id);
      itemsThatWillUpdate[indexToUpdate].quantity += 1;
      newQuantity = state.cartQuantity += 1;
      console.log('newQuantity is: ', newQuantity);
      return { ...state, cart: itemsThatWillUpdate, cartQuantity: newQuantity }
    case 'SUBTRACT_QUANTITY_CART_ITEM':
      itemsThatWillUpdate = [...state.cart];
      indexToUpdate = itemsThatWillUpdate.findIndex(cartItem => cartItem._id == action.payload._id);
      if (itemsThatWillUpdate[indexToUpdate].quantity > 1) itemsThatWillUpdate[indexToUpdate].quantity -= 1;
      return { cart: itemsThatWillUpdate }
    default:
      return state;
  }
}