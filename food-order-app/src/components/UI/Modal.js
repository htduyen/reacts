import classes from "./Modal.module.css";
import ReactDom from "react-dom";

import React, { Fragment } from "react";

const Backgrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onCloseCart}></div>;
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};
const portalElement = document.getElementById('overlays');
 
const Modal = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backgrop onCloseCart={props.onClose}/>, portalElement)}

            {ReactDom.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
};
export default Modal;
