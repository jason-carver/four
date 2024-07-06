import React, { useState } from 'react';
import './App.css';

function App() {
  const [percent, setPercent] = useState('');
  const [dice1, setDice1] = useState('');
  const [dice2, setDice2] = useState('');
  const [answer, setAnswer] = useState('');

  const generateNumbers = () => {
    const newPercent = Math.floor(Math.random() * 101).toString();
    const newDice1 = (Math.floor(Math.random() * 6) + 1).toString();
    const newDice2 = (Math.floor(Math.random() * 6) + 1).toString();
    const newAnswer = newPercent + newDice1 + newDice2;

    setPercent(newPercent);
    setDice1(newDice1);
    setDice2(newDice2);
    setAnswer(newAnswer);
  };

  return (
    <div className="container">
      <div className="box">
        <div className="row">
          <div className="label">Percent:</div>
          <div className="number">{percent}</div>
        </div>
        <div className="row">
          <div className="label" style={{ color: 'red' }}>D6:</div>
          <div className="number" style={{ color: 'red' }}>{dice1}</div>
        </div>
        <div className="row">
          <div className="label" style={{ color: 'blue' }}>D6:</div>
          <div className="number" style={{ color: 'blue' }}>{dice2}</div>
        </div>
        <div className="row">
          <div className="label">Answer:</div>
          <div className="number">{answer}</div>
        </div>
        <button className="button" onClick={generateNumbers}>Get Number</button>
      </div>
    </div>
  );
}

export default App;
