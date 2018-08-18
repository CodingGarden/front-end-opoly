import React, { Component } from 'react';

class PlayerSelect extends Component {
  state = {
    pawns: ['angular', 'js', 'react', 'vue'],
    currentPlayerSelect: 1,
    players: []
  };

  render() {
    return (
      <div>
        <h1>Player {this.state.currentPlayerSelect}, select a pawn:</h1>
        {
          this.state.pawns.map(pawn => (
            <img
              className="pawn"
              src={`./pawns/${pawn}-pawn.png`} />
          ))
        }
      </div>
    );
  }
}

export default PlayerSelect;
