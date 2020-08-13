import React, { useState, useEffect } from "react";
import Button from "../../lib/Button";
import Battle from "../../screens/Battle";

function Choice({history}) {
  const [count, setCount] = useState(10);
  const [player1, setPlayer1] = useState();

  const handleClick = (event) => {
    const weapon = event.target.name;
    setPlayer1(weapon);
  };

  const handleClickStart = () => {
    history.push('/')
  };

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    }
  }, [count]);

  if (player1) {
    return <Battle player1={player1} history={history}/>;
  }

  if (count === 0) {
    return (
      <div>
        <div className="row">
          <h2 className="count">Time out!</h2>
        </div>
        <div className="row">
        <Button type="button" onClick={handleClickStart} name="paper" alt="paper">
          TRY AGAIN!
        </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="row">
        <h2 className="count">{count}</h2>
      </div>
      <div className="row">
        <h2 className="title">Choose your weapon!</h2>
      </div>
      <div className="btn-row">
        <Button type="button" onClick={handleClick} name="rock" alt="rock">
          ROCK
        </Button>
        <Button type="button" onClick={handleClick} name="paper" alt="paper">
          PAPER
        </Button>
        <Button
          type="button"
          onClick={handleClick}
          name="scissors"
          alt="scissors"
        >
          SCISSORS
        </Button>
      </div>
    </div>
  );
}

export default Choice;
