import React, { Component } from "react";
import { Link } from "react-router-dom";

import SingupForm from "../../Components/SingupForm/SingupForm";

class SignUp extends Component {
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
        <h1>Sing Up Page</h1>
        <SingupForm />
        <div>
          or
          <Link to="/login">Login</Link>
        </div>
      </main>
    );
  }
}

export default SignUp;
