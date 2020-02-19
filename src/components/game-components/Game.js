import React, { Component } from "react";
import "./Game.css";

export default class Game extends Component {
  render() {
    return (
      <div>
        <h1>Game Page</h1>
        <div class="board">
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
        </div>
      </div>
    );
  }
}
