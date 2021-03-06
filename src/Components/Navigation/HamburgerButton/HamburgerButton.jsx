import React from "react";
import PropTypes from "prop-types";
import style from "./HamburgerButton.module.css";

const HamburgerButton = ({ isMenuOpen, menuToggle }) => {
  return (
    <button
      onClick={menuToggle.bind(null, isMenuOpen)}
      className={!isMenuOpen ? style.humburger : style.active}
    >
      <span className={style.span} />
      <span className={style.span} />
      <span className={style.span} />
    </button>
  );
};

HamburgerButton.propTypes = {
  isMenuOpen: PropTypes.bool,
  menuToggle: PropTypes.func,
};

export default HamburgerButton;
