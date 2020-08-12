import React from "react";
import Player from "./components/Player";
import Button from "./lib/Button";

// 'scissors' 'rock' 'paper'

function App() {
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
            <Player weapon={'scissors'}></Player>
            <div className="result">
              <h3>VS</h3>
            </div>
            <Player weapon={'rock'}></Player>
          </div>
          <div className="btn-row">
            <Button>Rock</Button>
            <Button>Paper</Button>
            <Button>Scissors</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
