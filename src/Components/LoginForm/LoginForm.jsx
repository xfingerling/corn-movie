import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as sessionOperations from "../../Redux/session/sessionOperations";

class LoginForm extends Component {
  state = { name: "", email: "", password: "" };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });

    this.setState({ name: "", email: "", password: "" });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  han;
  render() {
    const { name, email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={this.handleChange}
            name="name"
          ></input>
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={this.handleChange}
            name="email"
          ></input>
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={this.handleChange}
            name="password"
          ></input>
        </label>
        <button type="submit">Log In</button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onLogin: PropTypes.func,
};

const mapDispatchToProps = {
  onLogin: sessionOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginForm);
