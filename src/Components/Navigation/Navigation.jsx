import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import style from "./Navigation.module.css";

import HamburgerButton from "./HamburgerButton/HamburgerButtonContainer";
import Modal from "./Modal/ModalContainer";

const Navigation = ({ isMenuOpen, menuToggle }) => {
  return (
    <>
      {isMenuOpen && <Modal />}
      <nav className={style.nav}>
        <ul
          className={isMenuOpen ? style.active : style.list}
          onClick={menuToggle.bind(null, isMenuOpen)}
        >
          <HamburgerButton />
          <li className={style.listItem}>
            <NavLink
              to="/"
              exact
              className={style.link}
              activeClassName={style.selected}
            >
              Home
            </NavLink>
          </li>
          <li className={style.listItem}>
            <NavLink
              to="/movies"
              className={style.link}
              activeClassName={style.selected}
            >
              Movies
            </NavLink>
          </li>
          <li className={style.listItem}>
            <NavLink
              to="/series"
              className={style.link}
              activeClassName={style.selected}
            >
              TV Series
            </NavLink>
          </li>
          <li className={style.listItem}>
            <NavLink
              to="/сartoons"
              className={style.link}
              activeClassName={style.selected}
            >
              Сartoons
            </NavLink>
          </li>
          <li className={style.listItem}>
            <NavLink
              to="/profile"
              className={style.link}
              activeClassName={style.selected}
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

Navigation.propTypes = {
  isMenuOpen: PropTypes.bool,
};

export default Navigation;
