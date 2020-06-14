import React from "react";
import PropTypes from "prop-types";

import styles from "./Modal.module.css";

const Modal = ({ isMenuOpen, menuToggle }) => {
  const clickHandler = () => {
    menuToggle(isMenuOpen);
  };

  return <div className={styles.overlay} onClick={clickHandler}></div>;
};

Modal.propTypes = {
  isMenuOpen: PropTypes.bool,
  menuToggle: PropTypes.func,
};

export default Modal;
