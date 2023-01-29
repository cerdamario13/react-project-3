import React from "react";
import Button from "react-bootstrap/Button";
import classes from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

/*
  In React, a portal allows you to render a component or elements at a different 
  place in the DOM tree than the component's parent. 
  This can be useful for things like modals, tooltips, and other elements 
  that need to be rendered outside of the normal flow of the page.
*/

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>;
};

const Modal = (props) => {
  return (
    <div className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </div>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default ErrorModal;
