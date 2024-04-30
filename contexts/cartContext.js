// contexts/cartContext.js

import React, { createContext, useContext, useReducer } from 'react';

// Define the initial state of the cart
const initialState = {
  items: [],
};

// Define the action types
const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  UPDATE_CART_ITEM: 'UPDATE_CART_ITEM',
  DELETE_CART_ITEM: 'DELETE_CART_ITEM',
};

// Define the reducer function to handle actions
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case actionTypes.UPDATE_CART_ITEM:
      // Implement logic to update a cart item
      return state;
    case actionTypes.DELETE_CART_ITEM:
      // Implement logic to delete a cart item
      return state;
    default:
      return state;
  }
};

// Create the cart context
const CartContext = createContext();

// Create the cart provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to add an item to the cart
  const addToCart = (item) => {
    dispatch({ type: actionTypes.ADD_TO_CART, payload: item });
  };

  // Function to update a cart item
  const updateCartItem = (itemId, newQuantity) => {
    dispatch({ type: actionTypes.UPDATE_CART_ITEM, payload: { itemId, newQuantity } });
  };

  // Function to delete a cart item
  const deleteCartItem = (itemId) => {
    dispatch({ type: actionTypes.DELETE_CART_ITEM, payload: itemId });
  };

  return (
    <CartContext.Provider value={{ state, addToCart, updateCartItem, deleteCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access the cart context
export const useCart = () => {
  return useContext(CartContext);
};
