import React from "react";

// Create a new context object called 'cartContext' with default values.
const cartContext = React.createContext({
  items: [], // An array to store cart items.
  totalAmount: 0, // The total cost of items in the cart.
  addItem: (item) => {}, // A function to add an item to the cart.
  removeItem: (id) => {}, // A function to remove an item from the cart.
  clearCart: () => {}, // A function to clear all items from the cart.
});

export default cartContext;
