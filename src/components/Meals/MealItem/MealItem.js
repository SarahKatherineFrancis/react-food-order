import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

// Define a functional component named 'MealItem' that takes 'props' as its input.
const MealItem = (props) => {
  // Access the cart context using the 'useContext' hook.
  const cartCtx = useContext(CartContext);

  // Calculate the formatted price with a dollar sign and two decimal places.
  const price = `$${props.price.toFixed(2)}`;

  // Define a function 'addToCartHandler' to add a meal to the cart when called.
  const addToCartHandler = (amount) => {
    // Call 'cartCtx.addItem' to add an item to the cart context with the provided data.
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  // Render the component.
  return (
    <li className={classes.meal}>
      <div>
        {/* Display the name of the meal from 'props'. */}
        <h3>{props.name}</h3>
        {/* Display the description of the meal from 'props'. */}
        <div className={classes.description}>{props.description}</div>
        {/* Display the formatted price of the meal. */}
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        {/* Render the 'MealItemForm' component and pass 'addToCartHandler' as a prop to handle adding the meal to the cart. */}
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
