import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);

  // Access the CartContext using the useContext hook
  const cartCtx = useContext(CartContext);

  // Calculate the total amount of items in the cart and format it as a string
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  // Check if there are items in the cart
  const hasItems = cartCtx.items.length > 0;

  // Handler to remove a cart item by its ID
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  // Handler to add a cart item with a quantity of 1
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  // Create a list of CartItem components based on the items in the cart
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

  // Render the cart content inside a Modal component
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={props.onClose} />}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
