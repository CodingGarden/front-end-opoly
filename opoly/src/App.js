import React, { Component } from 'react';
import './App.css';

import Players from './components/Players';

import PlayerSelect from './containers/PlayerSelect';
import GameBoard from './containers/GameBoard';

class App extends Component {
  state = {
    players: [],
    gameStarted: false,
    currentPlayer: 1,
    square: null
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
    this.setState((prevState) => {
      let currentPlayer = prevState.players.find(player => player.number === prevState.currentPlayer);
      const location = currentPlayer.location + number;
      const landingSquare = squares[location % squares.length];
      const increaseScore = landingSquare.type === currentPlayer.pawn ? 2 : -1;

      currentPlayer = {
        ...currentPlayer,
        location: currentPlayer.location + number,
        score: Math.max(0,  currentPlayer.score + increaseScore)
      }

      const square = {
        player: currentPlayer.number,
        type: landingSquare.type,
        points: (increaseScore > 0 ? '+' : '') + increaseScore
      };

      return {
        square,
        players: prevState.players.map(player => {
          if (player.number === prevState.currentPlayer) {
            return currentPlayer;
          }
          return player;
        }),
        currentPlayer: prevState.currentPlayer === 1 ? 2 : 1
      };
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Front-end-opoly</h1>
        <Players players={this.state.players} />
        {
          this.state.gameStarted ?
          <GameBoard
            movePlayer={this.movePlayer}
            currentPlayer={this.state.currentPlayer}
            square={this.state.square}
            players={this.state.players} /> :
          <PlayerSelect startGame={this.startGame} />
        }
      </div>
    );
  }
}

export default App;
