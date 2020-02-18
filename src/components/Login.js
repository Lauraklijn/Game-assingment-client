import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/user-action";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("IM submitting!", this.state);
    console.log("WHAT IS THIS PROPS DISPATCH", this.props.dispatch);
    this.props.dispatch(login(this.state.email, this.state.password));
    this.props.history.push("/room"); //when logged in, it goes to the roompage
    this.setState({ email: "", password: "" });
  };

  handleInputs = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Enter your email and password to login</h1>
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

// const mapStateToProps = state => {
//   return {
//      userLoggedIn: state.user.token !== null
//   };
// };

export default connect()(Login);
//mapStateToProps
