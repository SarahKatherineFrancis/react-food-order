import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

// Define a functional component named 'HeaderCartButton' that takes 'props' as its input.
const HeaderCartButton = (props) => {
  // Initialize a state variable 'btnIsHighlighted' using the 'useState' hook with an initial value of 'false'.
  const [btnIsHighlighted, setBtnIsHightlighted] = useState(false);

  // Access the cart context using the 'useContext' hook.
  const cartCtx = useContext(CartContext);

  // Calculate the total number of items in the cart using 'reduce'.
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  // Destructure the 'items' array from the cart context.
  const { items } = cartCtx;

  // Define CSS classes for the button, including a 'bump' class if 'btnIsHighlighted' is 'true'.
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  // Use the 'useEffect' hook to trigger a button highlight animation when items are added to the cart.
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHightlighted(true);

    // Set a timer to remove the highlight after 300 milliseconds.
    const timer = setTimeout(() => {
      setBtnIsHightlighted(false);
    }, 300);

    // Cleanup by clearing the timer if the component unmounts or if 'items' changes.
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  // Render the component.
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        {/* Render the 'CartIcon' component. */}
        <CartIcon />
      </span>
      <span>Your Cart</span>
      {/* Display the number of items in the cart as a badge. */}
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
