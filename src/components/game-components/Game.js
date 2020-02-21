import React, { Component } from "react";
import "./Game.css";
import Board from "./Board";

export default class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// export default class Game extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Game Page</h1>
//         <div class="board">
//           <div class="square"></div>
//           <div class="square"></div>
//           <div class="square"></div>
//           <div class="square"></div>
//           <div class="square"></div>
//           <div class="square"></div>
//           <div class="square"></div>
//           <div class="square"></div>
//           <div class="square"></div>
//         </div>
//       </div>
//     );
//   }
// }
