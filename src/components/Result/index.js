import React from "react";
import { ROCK, PAPER, SCISSORS } from "../../infrastructure/constants";

const TIE = "Tie!";
const LOSE = "You Lose!";
const WIN = "You Win!";

const displayResult = (player1, player2) => {
  if (player1 === player2) {
    return TIE;
  }
  if (player1 === ROCK && player2 === PAPER) {
    return LOSE;
  }
  if (player1 === ROCK && player2 === SCISSORS) {
    return WIN;
  }
  if (player1 === PAPER && player2 === SCISSORS) {
    return LOSE;
  }
  if (player1 === SCISSORS && player2 === PAPER) {
    return WIN;
  }
  if (player1 === PAPER && player2 === ROCK) {
    return WIN;
  }
  if (player1 === SCISSORS && player2 === ROCK) {
    return LOSE;
  }
};

function Result({ player1, player2 }) {
  return (
    <div className="result">
      <h3 className="result">{displayResult(player1, player2)}</h3>
    </div>
  );
}

export default Result;
