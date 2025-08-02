import React from 'react';

const IndianPlayers = () => {
  const T20players = ['Virat', 'Rohit', 'Gill', 'Surya', 'Pant'];
  const RanjiPlayers = ['Pujara', 'Karun', 'Nadeem', 'Sandeep', 'Mukesh'];

  const allPlayers = [...T20players, ...RanjiPlayers];

  const oddPlayers = allPlayers.filter((_, i) => i % 2 !== 0);
  const evenPlayers = allPlayers.filter((_, i) => i % 2 === 0);

  return (
    <div>
      <h2>Even Team Players</h2>
      <ul>
        {evenPlayers.map((player, index) => <li key={index}>{player}</li>)}
      </ul>

      <h2>Odd Team Players</h2>
      <ul>
        {oddPlayers.map((player, index) => <li key={index}>{player}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
