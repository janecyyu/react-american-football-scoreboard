//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.
  // You'll need one for the home score and another for the away score.
  const [scoreL, setScoreL] = useState(0);
  const [scoreT, setScoreT] = useState(0);
  const handleHBtnT = () => setScoreL(scoreL + 7);
  const handleHBtnF = () => setScoreL(scoreL + 3);
  const handleHBtnQ = () => setScoreL(scoreL + 4);
  const handleABtnT = () => setScoreT(scoreT + 7);
  const handleABtnF = () => setScoreT(scoreT + 3);
  const handleABtnQ = () => setScoreT(scoreT + 4);

  return (
    <div className="container">

      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{scoreL}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{scoreT}</div>
          </div>
        </div>
        <BottomRow />
      </section> 
      
      <section className="buttons">
        <div className="homeButtons">
          <button
            className="homeButtons__touchdown"
            onClick={handleHBtnT}
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={handleHBtnF}
          >
            Home Field Goal
          </button>
          <button
            className="homeButtons__quarter"
            onClick={handleHBtnQ}
          >
            Home Quarter
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={handleABtnT}
          >
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={handleABtnF}
          >
            Away Field Goal
          </button>
          <button
            className="awayButtons__quarter"
            onClick={handleABtnQ}
          >
            Away Quarter
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
