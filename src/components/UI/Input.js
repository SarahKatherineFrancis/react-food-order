import React from "react";

import "./Input.css";

// Define the Input component using React.forwardRef to access the input element's reference
const Input = React.forwardRef((props, ref) => {
  return (
    <div className="input">
      {/* Render a label for the input element, connecting it to the input element via htmlFor */}
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* Render the input element, forwarding all props and passing the ref */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
