import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../actions/user-action";

class signupContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("IM submitting!", this.state);
    this.props.dispatch(signUp(this.state.email, this.state.password));
    this.setState({ value: event.target.value });
  };

  handleInputs = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Fill in the form to create an account</h1>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleInputs}
        />

        <label> Password: </label>
        <input
          type="text"
          name="password"
          value={this.state.password}
          onChange={this.handleInputs}
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default connect()(signupContainer);
