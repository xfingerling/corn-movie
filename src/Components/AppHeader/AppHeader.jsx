import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import style from "./AppHeader.module.css";

import Navigation from "../Navigation/NavigationContainer";
import UserProfile from "../UserProfile/UserProfile";
import Container from "../Container/Container";

const AppHeader = ({ authenticated, onLogOut }) => {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.inner}>
          <div className={style.logo}>cm</div>
          <Navigation />
          <div>
            {authenticated && <UserProfile onLogOut={onLogOut} />}

            {!authenticated && (
              <>
                <NavLink
                  to="/login"
                  className={style.link}
                  activeClassName={style.selected}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className={style.link}
                  activeClassName={style.selected}
                >
                  SignUp
                </NavLink>
              </>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

AppHeader.propTypes = {
  authenticated: PropTypes.bool,
  onLogOut: PropTypes.func,
};

export default AppHeader;
