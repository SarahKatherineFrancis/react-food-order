import { useEffect, useState } from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

// Define the 'AvailableMeals' component.
const AvailableMeals = () => {
  // Define a state variable 'meals' and a function to update it 'setMeals' using useState.
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status.

  // Use the useEffect hook to fetch data when the component is mounted.
  useEffect(() => {
    // Define an asynchronous function 'fetchMeals'.
    const fetchMeals = async () => {
      // Send an HTTP GET request to fetch meal data from a Firebase database.
      const response = await fetch(
        "https://react-http-9b836-default-rtdb.firebaseio.com/meals.json"
      );

      // Parse the response data as JSON.
      const responseData = await response.json();

      // Create an empty array 'loadedMeals' to store the fetched meal data.
      const loadedMeals = [];

      // Loop through the response data and format it into objects with specific properties.
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      // Update the 'meals' state with the loaded meal data.
      setMeals(loadedMeals);
      setIsLoading(false); // Set loading to false when data is fetched.
    };
    // Call the 'fetchMeals' function to initiate the data fetching.
    fetchMeals();
  }, []); // The empty dependency array ensures that this effect runs only once when the component is mounted.

  // If data is still loading, display a loading message.
  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  // Map through the 'meals' state data to create an array of 'MealItem' components.
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  // Render the 'AvailableMeals' component.
  return (
    <section className={classes.meals}>
      {/* Wrap the meal items in a 'Card' component for styling. */}
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
