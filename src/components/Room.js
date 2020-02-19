import React, { Component } from "react";
import { createRoom } from "../actions/room-action";
import { connect } from "react-redux";

class Room extends Component {
  state = {
    newRoom: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("IM submitting!", this.state);
    this.props.dispatch(createRoom(this.state.newRoom));
    this.setState({ value: event.target.value });
  };

  handleInputs = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (!this.props.rooms.length) {
      return <p> no rooms</p>;
    }
    console.log("what is id?", this.props.rooms);
    const roomList = this.props.rooms.map(room => {
      console.log("Room test", room);
      return <h2 key={room.id}> {room.name}</h2>; // to go to rooms
    });
    return (
      <div>
        <div>
          <input
            name="newRoom"
            text={""}
            value={this.state.name}
            onChange={this.handleInputs}
          ></input>
          <button onClick={this.handleSubmit} type="submit">
            Create room
          </button>
        </div>
        <div>
          <ul>Rooms: {roomList}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.roomData.all
});

export default connect(mapStateToProps)(Room);
