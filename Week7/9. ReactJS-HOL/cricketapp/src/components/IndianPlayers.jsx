import React from 'react';

const IndianPlayers = () => {
  
  const T20 = ["Rohit", "Virat", "Hardik", "Surya"];
  const Ranji = ["Sarfaraz", "Pujara", "Rahane", "Jadeja"];

 
  const mergedPlayers = [...T20, ...Ranji];

  
  const oddPlayers = mergedPlayers.filter((_, index) => index % 2 !== 0);
  const evenPlayers = mergedPlayers.filter((_, index) => index % 2 === 0);

  return (
    <div>
      <h2>🇮🇳 All Indian Players (Merged T20 + Ranji)</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>🟡 Odd Team Players (Index 1, 3, ...)</h2>
      <ul>
        {oddPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>🔵 Even Team Players (Index 0, 2, ...)</h2>
      <ul>
        {evenPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
