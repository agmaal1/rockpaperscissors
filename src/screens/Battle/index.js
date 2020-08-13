import React, { useState, useEffect } from "react";
import Result from "../../components/Result";
import Player from "../../components/Player";
import { weapons } from "../../infrastructure/constants";
import Button from "../../lib/Button";

function Battle({ player1, history }) {
  const [player2, setPlayer2] = useState("rock");

  useEffect(() => {
    const move = Math.floor(Math.random() * 3);
    setPlayer2(weapons[move]);
  }, []);

  const handleClickStart = () => {
    history.push("/");
  };

  return (
    <>
      <div className="player-row">
        <Player weapon={player1} />
        <div className="result">
          <Result player1={player1} player2={player2} />
        </div>
        <Player weapon={player2} />
      </div>
      <div className="row">
        <Button
          type="button"
          onClick={handleClickStart}
          name="paper"
          alt="paper"
        >
          TRY AGAIN!
        </Button>
      </div>
    </>
  );
}

export default Battle;
