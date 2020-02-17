import React, { Component } from "react";
// import { connect } from "react-redux";

export default class Loging extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("IM submitting!", this.state);
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
        <h1>Enter your email and password to loging</h1>
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
