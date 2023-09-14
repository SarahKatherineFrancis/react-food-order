import React from "react";

import classes from "./Checkout.module.css";

// Define a functional component named Checkout, which takes props as its argument.
const Checkout = (props) => {
  // Define a function called confirmHandler that takes an event object as its argument.
  const confirmHandler = (event) => {
    // Prevent the default behavior of the event, which is form submission in this case.
    event.preventDefault();
  };

  // Return the JSX (JavaScript XML) code for rendering the Checkout component.
  return (
    <form onSubmit={confirmHandler}>
      {/* Each block represents a form input field with a label */}
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      {/* Button for canceling the form, onClick event triggers the onCancel function from props */}
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
      {/* Button for confirming and submitting the form */}
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
