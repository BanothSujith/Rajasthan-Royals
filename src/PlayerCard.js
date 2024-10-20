import React from 'react';

function PlayerCard({ player }) {
  return (
    <div className='player-card'>
      <h4>{player.name}</h4>
      <p>{player.position}</p>
      <p>s/r:{player.sr}  avg:{player.avg}</p>
    </div>
  );
}

export default PlayerCard;
