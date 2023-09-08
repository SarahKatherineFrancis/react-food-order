import React, { useContext } from "react";

import "./HeaderCartButton.css";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  // Accessing the CartContext using useContext hook
  const cartCtx = useContext(CartContext);

  // Calculating the total number of items in the cart by summing up item amounts
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  // Rendering the button with cart icon, "Your Cart" text, and item count badge
  return (
    <button className="button" onClick={props.onClick}>
      <span className="icon">
        <CartIcon /> {/* Rendering the CartIcon component */}
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfCartItems}</span>{" "}
      {/* Displaying the item count */}
    </button>
  );
};

export default HeaderCartButton;
