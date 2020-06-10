import React from "react";
import style from "./HamburgerButton.module.css";

const HamburgerButton = ({ isMenuOpen, menuToggle }) => {
  const clickHandler = () => {
    menuToggle(isMenuOpen);
  };

  return (
    <button
      onClick={clickHandler}
      className={!isMenuOpen ? style.humburger : style.active}
    >
      <span className={style.span} />
      <span className={style.span} />
      <span className={style.span} />
    </button>
  );
};

export default HamburgerButton;
