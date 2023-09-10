import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

// Define the 'Backdrop' component.
const Backdrop = (props) => {
  // Render the component as a semi-transparent backdrop that closes the modal on click.
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

// Define the 'ModalOverlay' component.
const ModalOverlay = (props) => {
  // Render the component as a modal overlay with content.
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

// Get a reference to the DOM element where the portal should be rendered.
const portalElement = document.getElementById("overlays");

// Define the 'Modal' component.
const Modal = (props) => {
  // Render the component as a modal dialog using portals.
  return (
    <Fragment>
      {/* Use 'ReactDOM.createPortal' to render the 'Backdrop' component into the 'portalElement'. */}
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {/* Use 'ReactDOM.createPortal' to render the 'ModalOverlay' component into the 'portalElement'. */}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
