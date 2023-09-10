import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

// Define a functional component named 'Header' that takes 'props' as its input.
const Header = (props) => {
  // Render the component.
  return (
    // Use a 'Fragment' to group multiple JSX elements without adding extra nodes to the DOM.
    <Fragment>
      {/* Create a header section with the 'header' CSS class from the imported 'Header.module.css'. */}
      <header className={classes.header}>
        {/* Display the title 'ReactMeals'. */}
        <h1>ReactMeals</h1>
        {/* Render the 'HeaderCartButton' component and attach 'props.onShowCart' as the click handler. */}
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      {/* Create a div with the 'main-image' CSS class for displaying the meals image. */}
      <div className={classes["main-image"]}>
        {/* Display the 'mealsImage' imported from the assets folder with an alt text. */}
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
