import { useRef, useState } from "react";

import classes from "./Checkout.module.css";

// Define a function to check if a string is empty (contains only whitespace).
const isEmpty = (value) => value.trim() === "";

// Define a function to check if a string has exactly 5 characters.
const isFiveChars = (value) => value.trim().length === 5;

// Define a functional component named Checkout, which takes props as its argument.
const Checkout = (props) => {
  // Initialize state to manage the validity of form inputs.
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

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

    // Validate the entered data and update the validity state.
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    // Check if the entire form is valid before submitting.
    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return; // Don't submit if the form is not valid.
    }

    // At this point, you can proceed with form submission, e.g., sending data to a server.
  };

  // Define CSS classes for input controls based on their validity.
  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;

  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;

  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? "" : classes.invalid
  }`;

  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;

  // Return the JSX (JavaScript XML) code for rendering the Checkout component.
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      {/* Each block represents a form input field with a label */}
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code (5 characters long)!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
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
