import React, { useState } from "react";
import Player from "./components/Player";
import Button from "./lib/Button";
import Result from "./components/Result";
import {weapons} from './infrastructure/constants'

function App() {
  const [player1, setPlayer1] = useState('rock');
  const [player2, setPlayer2] = useState('rock');

  const randomMove = () => {
    const move = Math.floor(Math.random()*3)
    return weapons[move]
  }
  
  const handleClick = (event) => {
    const weapon = event.target.name
    setPlayer1(weapon)
    const player2move = randomMove()
    setPlayer2(player2move)
  };

  return (
    <section className="main">
      <div className="content">
        <div className="box">
          <div className="header-row">
            <header>
              <h2>Rock Paper Scissors</h2>
            </header>
          </div>
          <div className="players-row">
            <Player weapon={player1}></Player>
            <div className="result">
              <Result player1={player1} player2={player2}/>
            </div>
            <Player weapon={player2}></Player>
          </div>
          <div className="btn-row">
            <Button type="button" onClick={handleClick} name="rock" alt="rock">
              Rock
            </Button>
            <Button
              type="button"
              onClick={handleClick}
              name="paper"
              alt="paper"
            >
              Paper
            </Button>
            <Button
              type="button"
              onClick={handleClick}
              name="scissors"
              alt="scissors"
            >
              Scissors
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
