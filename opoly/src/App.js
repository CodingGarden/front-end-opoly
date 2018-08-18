import React, { Component } from 'react';
import './App.css';

import Players from './components/Players';

import PlayerSelect from './containers/PlayerSelect';
import GameBoard from './containers/GameBoard';

class App extends Component {
  state = {
    players: [],
    gameStarted: false,
    currentPlayer: 1
  };

  startGame = (players) => {
    this.setState({
      players: players.map(player => ({
        ...player,
        location: 0,
        score: 0
      })),
      gameStarted: true
    });
  }

  movePlayer = (number, squares) => {
    this.setState((prevState) => ({
      players: prevState.players.map(player => {
        if (player.number === prevState.currentPlayer) {
          const location = player.location + number;
          const landingSquare = squares[location % squares.length];
          let increaseScore = 0;

          if (landingSquare.type === player.pawn) {
            increaseScore = 2;
          } else {
            increaseScore = -1;
          }

          player = {
            ...player,
            location,
            score: Math.max(0,  player.score + increaseScore)
          }
        }
        return player;
      }),
      currentPlayer: prevState.currentPlayer === 1 ? 2 : 1
    }));
  }

  render() {
    return (
      <div className="App">
        <Players players={this.state.players} />
        {
          this.state.gameStarted ?
          <GameBoard
            movePlayer={this.movePlayer}
            currentPlayer={this.state.currentPlayer}
            players={this.state.players} /> :
          <PlayerSelect startGame={this.startGame} />
        }
      </div>
    );
  }
}

export default App;
