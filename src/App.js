import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

// Define the main component 'App'.
function App() {
  // Initialize a state variable 'cartIsShown' using the 'useState' hook, with an initial value of 'false'.
  const [cartIsShown, setCartIsShown] = useState(false);

  // Define a function 'showCartHandler' to set 'cartIsShown' to 'true' when called.
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  // Define a function 'hideCartHandler' to set 'cartIsShown' to 'false' when called.
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  // Render the component.
  return (
    // Wrap the component with 'CartProvider' to provide cart-related data to child components.
    <CartProvider>
      {/* Render the 'Cart' component if 'cartIsShown' is 'true', and pass 'hideCartHandler' as a prop for closing the cart. */}
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {/* Render the 'Header' component and pass 'showCartHandler' as a prop to handle cart visibility. */}
      <Header onShowCart={showCartHandler} />
      <main>
        {/* Render the 'Meals' component. */}
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
