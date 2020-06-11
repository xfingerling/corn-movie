import React from "react";

import styles from "./Modal.module.css";

const Modal = ({ isMenuOpen, menuToggle }) => {
  const clickHandler = () => {
    menuToggle(isMenuOpen);
  };

  return <div className={styles.overlay} onClick={clickHandler}></div>;
};

export default Modal;
