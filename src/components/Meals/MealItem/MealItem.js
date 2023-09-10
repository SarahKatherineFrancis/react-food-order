import React, { useContext } from "react";

import "./MealItem.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

// Define the MealItem functional component, which takes props as input
const MealItem = (props) => {
  // Access the CartContext using the useContext hook
  const cartCtx = useContext(CartContext);

  // Format the price to display as a string with two decimal places
  const price = `$${props.price.toFixed(2)}`;

  // Define a function to handle adding the meal to the cart
  const addToCartHandler = (amount) => {
    // Call the addItem method from the CartContext with meal details
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  // Return JSX for rendering the individual meal item
  return (
    <li className="meal">
      <div>
        {/* Display the meal name */}
        <h3>{props.name}</h3>
        {/* Display the meal description */}
        <div className="description">{props.description}</div>
        {/* Display the formatted price */}
        <div className="price">{price}</div>
      </div>
      <div>
        {/* Render the MealItemForm component and pass the addToCartHandler function */}
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
