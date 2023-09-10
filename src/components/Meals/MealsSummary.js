import classes from "./MealsSummary.module.css";

// Define the 'MealsSummary' component.
const MealsSummary = () => {
  // Render the component.
  return (
    // Create a section element with the 'summary' CSS class for styling.
    <section className={classes.summary}>
      {/* Display a heading with the text 'Delicious Food, Delivered To You'. */}
      <h2>Delicious Food, Delivered To You</h2>
      {/* Display a paragraph describing the selection of meals available for delivery. */}
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      {/* Display another paragraph highlighting the quality and preparation of the meals. */}
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
