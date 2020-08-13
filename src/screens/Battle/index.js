import React, { useState, useEffect } from "react";
import Result from "../../components/Result";
import Player from "../../components/Player";
import { weapons } from "../../infrastructure/constants";
import { Link } from "react-router-dom";

function Battle({ player1 }) {
  const [player2, setPlayer2] = useState("rock");

  useEffect(() => {
    const move = Math.floor(Math.random() * 3);
    setPlayer2(weapons[move]);
  }, []);

  return (
    <div>
      <div className="player-row">
        <Player weapon={player1} />
        <Result player1={player1} player2={player2} />
        <Player weapon={player2} />
      </div>
      <div className="row">
        <Link to="/" className="btn" alt="try again">
          TRY AGAIN!
        </Link>
      </div>
    </div>
  );
}

export default Battle;
