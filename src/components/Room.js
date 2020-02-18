import React, { Component } from "react";
import { createRoom } from "../actions/user-action";

class Room extends Component {
  state = [
    {
      newRoom: ""
    }
  ];

  handleSubmit = event => {
    event.preventDefault();
    console.log("IM submitting!", this.state);
    this.props.dispatch(createRoom(this.state.email, this.state.password));
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <ul>Rooms:</ul>
        <input value={this.state.newRoom} />
        <button>Create room</button>
      </div>
    );
  }
}

export default Room;
