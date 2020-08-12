import React from "react";

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
            <div className="player">player 1</div>
            <div className="result">
              <h3>VS</h3>
            </div>
            <div className="player">player 2</div>
          </div>
          <div className="btn-row">
            <button className='btn' >Rock</button>
            <button className='btn' >Paper</button>
            <button className='btn' >Scissors</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
