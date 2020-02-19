import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "../../src/App.css";

export default class WelcomePage extends Component {
  render() {
    return (
      <div className="welcomepage">
        <h1>Welcome!</h1>

        <a href="http://localhost:3000/login">
          <Button variant="dark" size="lg" block>
            Login
          </Button>
        </a>

        <a href="http://localhost:3000/signup">
          <Button variant="dark" size="lg" block>
            Signup
          </Button>{" "}
        </a>
      </div>
    );
  }
}
