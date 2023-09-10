import { useReducer } from "react";

import CartContext from "./cart-context";

// Define the default state for the shopping cart
const defaultCartState = {
  items: [], // An array to store the cart items
  totalAmount: 0, // The total cost of items in the cart
};

// Reducer function that handles state changes based on actions
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // Calculate the updated total amount when adding an item
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // Check if the item being added already exists in the cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      // If the item exists, update its amount and create a new array of items
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // If the item is new, concatenate it to the existing items array
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    // Find the index of the item to be removed in the cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];

    // Calculate the updated total amount when removing an item
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;

    if (existingItem.amount === 1) {
      // If the item quantity is 1, remove it from the items array
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      // If the item quantity is greater than 1, decrease its amount by 1
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

// Create a 'CartProvider' component to manage the shopping cart state
const CartProvider = (props) => {
  // Initialize the cart state using the 'useReducer' hook with the 'cartReducer'
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  // Handler to add an item to the cart
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  // Handler to remove an item from the cart
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  // Create a context object to provide cart-related data and functions
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  // Provide the cart context to child components using 'CartContext.Provider'
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
