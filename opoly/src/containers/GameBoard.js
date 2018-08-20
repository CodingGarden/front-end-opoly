import React, { Component } from 'react';

class GameBoard extends Component {
  state = {
    squares: [],
    grid_size: 5
  };

  componentDidMount() {
    const squares = this.createSquares();
    this.setState({
      squares
    });
  }

  createSquares() {
    // const { players } = this.props;
    // const player_1 = players[0];
    // const player_2 = players[1];
    // const [ player_1, player_2 ] = players;
    // const [ player_1, player_2 ] = this.props.players;
    const { players: [ player_1, player_2 ] } = this.props;
    const { grid_size } = this.state;

    const squares = [{
      row: 1,
      col: 1,
      type: 'start'
    }];

    let i = 1;
    let row = 1;
    let col = 2;
    const total_squares = (grid_size * 2 + ((grid_size - 2) * 2));
    while(squares.length < total_squares) {
      const square = {
        row,
        col
      };

      if (i % 2 !== 0) {
        square.type = player_1.pawn;
      } else if (i % 2 === 0) {
        square.type = player_2.pawn;
      }

      // if (i % 3 === 0) {
      //   square.type = 'face-off';
      // }

      squares.push(square);
      i++;

      if (i < grid_size) {
        col ++;
      } else if (i < 2 * grid_size - 1) {
        row ++;
      } else if (i < 3 * grid_size - 2) { 
        col --; 
      } else {
        row --;
      }
    }

    return squares;
  }

  rollDie = () => {
    const dice = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    const index = Math.floor(dice.length * Math.random());
    const rolledNumber = dice[index];
    this.setState({
      rolledNumber
    });

    this.props.movePlayer(index + 1, this.state.squares);
  }
  
  render() {
    const { grid_size } = this.state;
    let playerLocations = [];
    if (this.state.squares.length > 0) {
      playerLocations = this.props.players.map(player => this.state.squares[player.location % this.state.squares.length]);
    } 
    return (
      <div
        className="game-board"
        style={{
          gridTemplate: `repeat(${grid_size}, 1fr) /repeat(${grid_size}, 1fr)`
        }}>
        {
          this.state.squares.map((square, i) => (
            <div
              style={{
                gridRow: square.row,
                gridColumn: square.col
              }}
              key={i}
              className="game-square">
              {
                square.type !== 'start' ?
                <img alt={square.type} src={`./images/${square.type}.png`} /> :
                'Rest due to JavaScript Fatigue'
              }
            </div>
          ))
        }
        {
          playerLocations.map((location, i) => {
            const player = this.props.players[i];
            return (
              <div
                key={player.number}
                style={{
                  gridRow: location.row,
                  gridColumn: location.col,
                  transition: 'all 1s'
                }}
                className="player-avatar">
                <img
                  alt={player.number}
                  className="pawn"
                  src={`./pawns/${player.pawn}-pawn.png`} />
              </div>
            )
          })
        }
        <div className="board-middle">
          {
            this.props.square ?
            <h4>Player {this.props.square.player} landed on {this.props.square.type}! {this.props.square.points} Points</h4> :
            ''
          }
          <h4>Player {this.props.currentPlayer}, Roll the die!</h4>
          <p className="rolled-die">{this.state.rolledNumber}</p>
          <button onClick={this.rollDie} className="button">Roll</button>
        </div>
      </div>
    );
  }
}

export default GameBoard;
