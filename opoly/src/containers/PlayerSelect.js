import React, { Component } from 'react';

class PlayerSelect extends Component {
  state = {
    pawns: ['angular', 'js', 'react', 'vue'],
    currentPlayerSelect: 1,
    players: [],
    readyToStart: false
  };

  setPlayer = (pawn) => {
    this.setState((prevState) => ({
      currentPlayerSelect: prevState.currentPlayerSelect + 1,
      players: [
        ...prevState.players, {
          number: prevState.currentPlayerSelect,
          pawn
        }
      ],
      readyToStart: prevState.currentPlayerSelect === 2 ? true : false
    }));
  }

  render() {
    return (
      <div>
        <div className="players">
          {
            this.state.players.map(player => (
              <div key={player.number} className="player">
                <p>Player {player.number}</p>
                <img
                  className="player-pawn"
                  alt={player.pawn}
                  src={`./pawns/${player.pawn}-pawn.png`} />
              </div>
            ))
          }
        </div>
        {
          this.state.readyToStart ?
          <React.Fragment>
            <h1>Click start to begin!</h1>
            <button className="start-button">Start</button>
          </React.Fragment> :
          <React.Fragment>
            <h1>Player {this.state.currentPlayerSelect}, select a pawn:</h1>
            {
              this.state.pawns.map(pawn => (
                <div className="pawn-container" key={pawn} onClick={() => this.setPlayer(pawn)}>
                  <img
                    className="pawn"
                    alt={pawn}
                    src={`./pawns/${pawn}-pawn.png`} />
                  <img
                    className="pawn-logo"
                    alt={pawn}
                    src={`./logos/${pawn}.png`} />
                </div>
              ))
            }
          </React.Fragment>
        }
      </div>
    );
  }
}

export default PlayerSelect;
