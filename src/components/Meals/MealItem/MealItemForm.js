import { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

// Define a functional component named 'MealItemForm' that takes 'props' as its input.
const MealItemForm = (props) => {
  // Initialize a state variable 'amountIsValid' using the 'useState' hook with an initial value of 'true'.
  const [amountIsValid, setAmountIsValid] = useState(true);

  // Create a reference to the amount input element using the 'useRef' hook.
  const amountInputRef = useRef();

  // Define a function 'submitHandler' to handle form submission.
  const submitHandler = (event) => {
    event.preventDefault();

    // Retrieve the entered amount from the input element using the reference.
    const enteredAmount = amountInputRef.current.value;

    // Convert the entered amount to a number.
    const enteredAmountNumber = +enteredAmount;

    // Check if the entered amount is valid (between 1 and 5).
    if (
      enteredAmount.trim().length === 0 || // Check for empty input.
      enteredAmountNumber < 1 || // Check if the amount is less than 1.
      enteredAmountNumber > 5 // Check if the amount is greater than 5.
    ) {
      // Set 'amountIsValid' to 'false' and exit the function if the amount is not valid.
      setAmountIsValid(false);
      return;
    }

    // Call the 'onAddToCart' function from 'props' with the entered amount as an argument.
    props.onAddToCart(enteredAmountNumber);
  };

  // Render the component.
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {/* Render an 'Input' component for entering the amount and attach the 'amountInputRef' reference to it. */}
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
      {/* Render a button to submit the form. */}
      <button>+ Add</button>
      {/* Display an error message if 'amountIsValid' is 'false'. */}
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
