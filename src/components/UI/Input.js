import React from "react";

import classes from "./Input.module.css";

// Define the 'Input' component using 'React.forwardRef'.
const Input = React.forwardRef((props, ref) => {
  // Render the component.
  return (
    // Create a <div> element with the 'input' CSS class for styling.
    <div className={classes.input}>
      {/* Create a label element associated with the input using 'htmlFor'. */}
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* Create an input element and assign the 'ref' passed as a prop and spread other input-related props. */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
