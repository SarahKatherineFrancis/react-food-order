import React, { useRef, useState } from "react";
import Input from "../../UI/Input";

// Define the MealItemForm functional component, which takes props as input
const MealItemForm = (props) => {
  // Initialize state to manage the validity of the entered amount
  const [amountIsValid, setAmountIsValid] = useState(true);

  // Create a reference to the amount input element
  const amountInputRef = useRef();

  // Define a function to handle form submission
  const submitHandler = (event) => {
    event.preventDefault();

    // Get the entered amount from the input element
    const enteredAmount = amountInputRef.current.value;

    // Convert the entered amount to a number
    const enteredAmountNumber = +enteredAmount;

    // Check if the entered amount is valid (between 1 and 5)
    if (
      enteredAmount.trim() === 0 || // Check if it's empty
      enteredAmountNumber < 1 || // Check if it's less than 1
      enteredAmountNumber > 5 // Check if it's greater than 5
    ) {
      // If the amount is not valid, set the state to indicate an error
      setAmountIsValid(false);
      return;
    }

    // If the amount is valid, call the onAddToCart function from props
    props.onAddToCart(enteredAmountNumber);
  };

  // Render a form element with an input, button, and error message
  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className="button">+ Add</button>
      {/* Display an error message if the amount is not valid */}
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
