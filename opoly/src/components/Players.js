import React from 'react';

const Players = ({ players, showSmoke }) => (
  <div className="players">
    {
      players.map(player => (
        <div key={player.number} className="player">
          <p>Player {player.number}</p>
          {showSmoke && <img
            className="smoke"
            height="250px"
            alt="smoke"
            src="./images/smoke.png"/>}
          <img
            className="player-pawn"
            alt={player.pawn}
            src={`./pawns/${player.pawn}-pawn.png`} />
          <p className="player-score">{player.score}</p>
        </div>
      ))
    }
  </div>
);

export default Players;
