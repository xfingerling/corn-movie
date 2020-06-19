import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as sessionOperations from "../../Redux/session/sessionOperations";

class SingupForm extends Component {
  state = { name: "", email: "", password: "" };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSignup({ ...this.state });

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

SingupForm.propTypes = {
  onSignup: PropTypes.func,
};

const mapDispatchToProps = {
  onSignup: sessionOperations.signup,
};

export default connect(null, mapDispatchToProps)(SingupForm);
