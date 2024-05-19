import React, { useState } from 'react';
import './App.css';

function App() {
  const [percent, setPercent] = useState(null);
  const [dice1, setDice1] = useState(null);
  const [dice2, setDice2] = useState(null);

  const generateNumbers = () => {
    setPercent(Math.floor(Math.random() * 101));
    setDice1(Math.floor(Math.random() * 6) + 1);
    setDice2(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div className="container">
      <div className="box">
        <div className="row">
          <div className="label">Percent:</div>
          <div className="number">{percent !== null ? percent : ' '}</div>
        </div>
        <div className="row">
          <div className="label" style={{ color: 'red' }}>D6:</div>
          <div className="number" style={{ color: 'red' }}>{dice1 !== null ? dice1 : ' '}</div>
        </div>
        <div className="row">
          <div className="label" style={{ color: 'blue' }}>D6:</div>
          <div className="number" style={{ color: 'blue' }}>{dice2 !== null ? dice2 : ' '}</div>
        </div>
        <button className="button" onClick={generateNumbers}>Get Number</button>
      </div>
    </div>
  );
}

export default App;
