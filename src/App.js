import React, { useState } from "react";
import Player from "./components/Player";
import Button from "./lib/Button";

// 'scissors' 'rock' 'paper'

function App() {
  const [player1, setPlayer1] = useState();
  const [player2, setPlayer2] = useState();

  const handleClick = (event) => {
    const weapon = event.target.name
    setPlayer1(weapon)
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
            <Player weapon={"scissors"}></Player>
            <div className="result">
              <h3>VS</h3>
            </div>
            <Player weapon={"rock"}></Player>
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
