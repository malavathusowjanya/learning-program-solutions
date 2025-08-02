import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 90 },
    { name: "Rohit", score: 80 },
    { name: "Gill", score: 65 },
    { name: "Rahul", score: 50 },
    { name: "Jadeja", score: 75 },
    { name: "Bumrah", score: 55 },
    { name: "Shami", score: 60 },
    { name: "Ashwin", score: 70 },
    { name: "Iyer", score: 85 },
    { name: "Pant", score: 95 },
    { name: "Surya", score: 45 }
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with Score below 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
