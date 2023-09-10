import { useReducer } from "react";

import CartContext from "./cart-context";

// Defining the default state for the shopping cart.
const defaultCartState = {
  items: [], // An array to store the cart items.
  totalAmount: 0, // The total cost of items in the cart.
};

// Reducer function that handles state changes based on actions.
const cartReducer = (state, action) => {
  // If the action type is 'ADD', update the cart state.
  if (action.type === "ADD") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item); // Add the new item to the cart.
    }

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount; // Update the total cost.
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

// Creating a 'CartProvider' component to manage the shopping cart state.
const CartProvider = (props) => {
  // Initializing the cart state using the 'useReducer' hook with the 'cartReducer'.
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  // Handler to add an item to the cart.
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  // Handler to remove an item from the cart (not implemented in this code).
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  // Creating a context object to provide cart-related data and functions.
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  // Providing the cart context to child components using 'CartContext.Provider'.
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
