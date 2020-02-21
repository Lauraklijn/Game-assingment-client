import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux"; // import connect from redux to use dispatch for stream + change export
import SignUp from "./components/Signup";
import Login from "./components/Login";
import WelcomePage from "./components/WelcomePage";
import Room from "./components/Room";
import GamePage from "./components/game-components/Game";
import "bootstrap/dist/css/bootstrap.min.css";
import Channel from "./components/Channel";

class App extends Component {
  // to use stream --> configured the app into a class component
  stream = new EventSource("http://localhost:4000/stream"); // declare stream, calling server

  componentDidMount = () => {
    this.stream.onmessage = event => {
      const stringAction = event.data;
      const action = JSON.parse(stringAction);
      // console.log("STREAM MESSAGE GOT", action);
      this.props.dispatch(action);
    };
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/room" component={Room} />
          <Route exact path="/room/:id" component={Channel} />
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/game" component={GamePage} />
          <Route exact path="/login" component={Login} />
        </Router>
      </div>
    );
  }
}

export default connect()(App); // Connect app to redux (when changing import above)
