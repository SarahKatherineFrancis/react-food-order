import classes from "./CartItem.module.css";

// Define a functional component named 'CartItem' that takes 'props' as its input.
const CartItem = (props) => {
  // Calculate the formatted price with a dollar sign and two decimal places.
  const price = `$${props.price.toFixed(2)}`;

  // Render the component.
  return (
    // Apply the CSS class 'cart-item' from the imported 'CartItem.module.css'.
    <li className={classes["cart-item"]}>
      <div>
        {/* Display the name of the item from 'props'. */}
        <h2>{props.name}</h2>
        {/* Create a section for displaying the price and quantity. */}
        <div className={classes.summary}>
          {/* Display the formatted price. */}
          <span className={classes.price}>{price}</span>
          {/* Display the quantity and append 'x' in front of it. */}
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      {/* Create a section for actions (e.g., remove or add items to the cart). */}
      <div className={classes.actions}>
        {/* Render a button to decrement the item quantity, and attach 'props.onRemove' as the click handler. */}
        <button onClick={props.onRemove}>−</button>
        {/* Render a button to increment the item quantity, and attach 'props.onAdd' as the click handler. */}
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
