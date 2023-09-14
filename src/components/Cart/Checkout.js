import { useRef } from "react";

import classes from "./Checkout.module.css";

// Define a functional component named Checkout, which takes props as its argument.
const Checkout = (props) => {
  // Create refs for input fields to access their values.
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  // Define a function called confirmHandler that takes an event object as its argument.
  const confirmHandler = (event) => {
    // Prevent the default behavior of the event, which is form submission in this case.
    event.preventDefault();

    // Get the values entered by the user in the input fields.
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    // At this point, you can use the entered values as needed, e.g., send them to a server.
  };

  // Return the JSX (JavaScript XML) code for rendering the Checkout component.
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      {/* Each block represents a form input field with a label */}
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      <div className={classes.actions}>
        {/* Button for canceling the form, onClick event triggers the onCancel function from props */}
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        {/* Button for confirming and submitting the form */}
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
