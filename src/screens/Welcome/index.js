import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <div className="header-row">
        <header>
          <h2>ROCK PAPER SCISSORS</h2>
        </header>
      </div>
      <div className="row">
        <Link className="btn" to="choice" name="rock" alt="start">
          START
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
