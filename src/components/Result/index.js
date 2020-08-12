import React from "react";
import {weapons} from '../../infrastructure/constants'

const TIE = "Tie!";
const LOSE = "You Lose";
const WIN = "You win";

function Result({ player1, player2 }) {
  const displayResult = () => {
      if (player1 === player2) {
        return TIE;
      }
      if (player1 === weapons[0] && player2 === weapons[1]) {
        return LOSE;
      }
      if (player1 === weapons[0] && player2 === weapons[2]) {
        return WIN;
      }
      if (player1 === weapons[1] && player2 === weapons[2]) {
        return LOSE;
      }
      if (player1 === weapons[2] && player2 === weapons[1]) {
        return WIN;
      }
      if (player1 === weapons[1] && player2 === weapons[0]) {
        return WIN;
      }
      if (player1 === weapons[2] && player2 === weapons[0]) {
        return LOSE;
      }
  }

 return <h3>{displayResult()}</h3>
}

export default Result