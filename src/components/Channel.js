import React, { Component } from "react";
import { connect } from "react-redux";
import Game from "../components/game-components/Game";
export class Channel extends Component {
  render() {
    return (
      <div>
        Hello
        <Game />
      </div>
    );
  }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Channel);
