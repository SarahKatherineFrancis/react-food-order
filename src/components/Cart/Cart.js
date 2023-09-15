import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

// Define the Cart component.
const Cart = (props) => {
  // State to manage whether the user is in the checkout process.
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  // Access the CartContext using the useContext hook.
  const cartCtx = useContext(CartContext);

  // Calculate the total amount of items in the cart and format it as a string.
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  // Check if there are items in the cart.
  const hasItems = cartCtx.items.length > 0;

  // Handler to remove a cart item by its ID.
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  // Handler to add a cart item with a quantity of 1.
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  // Handler to initiate the checkout process.
  const orderHandler = () => {
    setIsCheckout(true);
  };

  // Handler to submit the order to a server.
  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);

    // Send a POST request to a server to submit the order.
    const response = await fetch(
      "https://react-http-9b836-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({ user: userData, orderedItems: cartCtx.items }),
      }
    );

    setIsSubmitting(false);
    setDidSubmit(true);

    // Clear the cart after the order is submitted.
    cartCtx.clearCart();
  };

  // Create a list of CartItem components based on the items in the cart.
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  // Define the actions (buttons) for the modal.
  const modalActions = (
    <div className={classes.actions}>
      {/* Button to close the cart */}
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {/* Button to place an order if there are items in the cart */}
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  // Content to be displayed in the cart modal.
  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {/* Render the Checkout component if in checkout mode */}
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {/* Render the modal actions */}
      {!isCheckout && modalActions}
    </>
  );

  // Content to be displayed when submitting an order.
  const isSubmittingModalContent = <p>Sending order data...</p>;

  // Content to be displayed after successfully submitting an order.
  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        {/* Button to close the cart */}
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );

  // Render the cart content inside a Modal component.
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
