import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactRouterPropTypes from "react-router-prop-types";
import PropTypes from "prop-types";

import LoginForm from "../../Components/LoginForm/LoginForm";

class Login extends Component {
  componentDidMount() {
    if (this.props.authenticated) {
      this.props.history.replace("/");
    }
  }

  componentDidUpdate() {
    if (this.props.authenticated) {
      this.props.history.replace("/");
    }
  }

  render() {
    return (
      <main>
        <h1>Login Page</h1>
        <LoginForm />
        <div>
          or
          <Link to="/signup">Sign Up</Link>
        </div>
      </main>
    );
  }
}

Login.propTypes = {
  authenticated: PropTypes.bool,
  history: ReactRouterPropTypes.history.isRequired,
};

export default Login;
