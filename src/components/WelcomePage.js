import React, { Component } from "react";

export default class WelcomePage extends Component {
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <a href="http://localhost:3000/loging">
          <button>Login</button>
        </a>
        <a href="http://localhost:3000/signup">
          <button>Signup</button>{" "}
        </a>
      </div>
    );
  }
}
