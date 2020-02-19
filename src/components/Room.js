import React, { Component } from "react";
import { createRoom } from "../actions/room-action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
      <div className="room">
        <Link to="/">
          <p>HOME</p>
        </Link>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Player room</Form.Label>
          <Form.Control
            name="newRoom"
            text={""}
            value={this.state.name}
            onChange={this.handleInputs}
            placeholder="Enter roomname"
          />
          <Button
            type="submit"
            value="Submit"
            variant="dark"
            onClick={this.handleSubmit}
            type="submit"
          >
            Submit
          </Button>
        </Form.Group>

        <a href="http://localhost:3000/game">
          <Button variant="dark" size="lg">
            Play game
          </Button>
        </a>

        <div>
          <Card bg="light" text="black" style={{ width: "18rem" }}>
            <Card.Header>Rooms</Card.Header>
            <Card.Body>
              <Card.Text>
                <div className="roomlist"> {roomList}</div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.roomData.all
});

export default connect(mapStateToProps)(Room);

//Without BOOTSTRAP
// <input
// name="newRoom"
// text={""}
// value={this.state.name}
// onChange={this.handleInputs}
// ></input>
// <button onClick={this.handleSubmit} type="submit">
// Create room
// </button>
