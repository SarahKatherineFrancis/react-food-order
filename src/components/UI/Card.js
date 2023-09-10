import classes from "./Card.module.css";

// Define the 'Card' component.
const Card = (props) => {
  // Render the component.
  return (
    // Create a <div> element with the 'card' CSS class for styling.
    <div className={classes.card}>
      {/* Render the child components or content passed within the 'props.children' property. */}
      {props.children}
    </div>
  );
};

export default Card;
