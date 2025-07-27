import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore() {
  const name = "Anitha Sivalasetty";
  const College = "KL University";
  const total = 470;
  const goal = "Top 1% in academics";

  const average = (total / 500) * 100;

  return (
    <div className="score-card">
      <h2>Student Score Calculator</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>College:</strong> {College}</p>
      <p><strong>Total Marks:</strong> {total}/500</p>
      <p><strong>Goal:</strong> {goal}</p>
      <p><strong>Average Score:</strong> {average.toFixed(2)}%</p>
    </div>
  );
}

export default CalculateScore;
