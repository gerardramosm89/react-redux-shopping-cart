"use strict"

export function cartReducers(state={ cart: [], cartQuantity: 0 }, action) {
  let newQuantity;
  switch(action.type) {
    case 'ADD_TO_CART':
      newQuantity = state.cartQuantity += 1;
      return { ...state, cart: [...state.cart, action.payload.book], cartQuantity: newQuantity };
    case 'DELETE_CART_ITEM':
      const indexToDelete = [...state.cart].findIndex(function(cartItem) {
        return cartItem._id === action.payload._id; 
      });
      const deleted = [...state.cart];
      deleted.splice(indexToDelete, 1);
      newQuantity = state.cartQuantity -= [...state.cart][indexToDelete].quantity;      
      return { cart: deleted, cartQuantity: newQuantity }
    case 'ADD_QUANTITY_CART_ITEM':
      let itemsThatWillUpdate = [...state.cart];
      let indexToUpdate = itemsThatWillUpdate.findIndex(cartItem => cartItem._id == action.payload._id);
      itemsThatWillUpdate[indexToUpdate].quantity += 1;
      newQuantity = state.cartQuantity += 1;
      return { ...state, cart: itemsThatWillUpdate, cartQuantity: newQuantity }
    case 'SUBTRACT_QUANTITY_CART_ITEM':
      itemsThatWillUpdate = [...state.cart];
      indexToUpdate = itemsThatWillUpdate.findIndex(cartItem => cartItem._id == action.payload._id);
      if (itemsThatWillUpdate[indexToUpdate].quantity > 1) {
        itemsThatWillUpdate[indexToUpdate].quantity -= 1;
        newQuantity = state.cartQuantity -= 1;        
      } else {
        const indexToDelete = [...state.cart].findIndex(function(cartItem) {
          return cartItem._id === action.payload._id; 
        });
        const deleted = [...state.cart];
        deleted.splice(indexToDelete, 1);
        newQuantity = state.cartQuantity -= 1;      
        return { cart: deleted, cartQuantity: newQuantity }
      }
      return { cart: itemsThatWillUpdate, cartQuantity: newQuantity }
    default:
      return state;
  }
}