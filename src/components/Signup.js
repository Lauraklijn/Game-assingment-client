import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../actions/user-action";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class signupContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("IM submitting!", this.state);
    if (!this.state.email || !this.state.password) {
      alert("Fill in somethinh Asshole!!");
      return;
    }

    this.props.dispatch(
      signUp(this.state.email, this.state.password, this.props.history)
    );

    this.setState({ value: event.target.value });
  };

  handleInputs = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="signup">
        <h1>Fill in the form to create an account</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleInputs}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              name="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handleInputs}
            />

            <Button type="submit" value="Submit" variant="dark">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default connect()(signupContainer);

/*{
  /* <form onSubmit={this.handleSubmit}>
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
<Button type="submit" value="Submit" variant="outline-primary">
  Submit
</Button>
</form> */
