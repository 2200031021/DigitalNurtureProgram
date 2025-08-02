import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Rohit", score: 80 },
    { name: "Virat", score: 90 },
    { name: "Hardik", score: 65 },
    { name: "Jadeja", score: 72 },
    { name: "Bumrah", score: 40 },
    { name: "KL Rahul", score: 88 },
    { name: "Shubman", score: 55 },
    { name: "Ashwin", score: 75 },
    { name: "Shami", score: 60 },
    { name: "Ishan", score: 78 },
    { name: "Surya", score: 69 },
  ];

  // Using map
  const allPlayers = players.map((p, index) => (
    <li key={index}>{p.name} - {p.score}</li>
  ));

  // Using arrow function for filtering
  const below70 = players.filter(p => p.score < 70).map((p, index) => (
    <li key={index}>{p.name} - {p.score}</li>
  ));

  return (
    <div>
      <h2>All Players</h2>
      <ul>{allPlayers}</ul>

      <h2>Players with Score below 70</h2>
      <ul>{below70}</ul>
    </div>
  );
};

export default ListofPlayers;
