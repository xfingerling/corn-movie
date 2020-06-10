import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Navigation.module.css";

import HamburgerButton from "./HamburgerButton/HamburgerButtonContainer";

const Navigation = ({ isOpen, menuToggle }) => {
  return (
    <nav className={style.nav}>
      <ul className={isOpen ? style.active : style.list}>
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
      </ul>
    </nav>
  );
};

export default Navigation;