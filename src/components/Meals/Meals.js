import React from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

// Define the 'Meals' component.
const Meals = () => {
  // Render the component.
  return (
    <>
      {/* Render the 'MealsSummary' component, which provides a summary of meals. */}
      <MealsSummary />
      {/* Render the 'AvailableMeals' component, which displays a list of available meals. */}
      <AvailableMeals />
    </>
  );
};

export default Meals;
