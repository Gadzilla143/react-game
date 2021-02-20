import "./App.scss";
import React, { useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { GameField } from "./components/GameField/GameField";
import { Score } from "./components/Score/Score";
import { Game } from "./components/Game/Game";

function App() {
  const [game, setGame] = useState(false);
  const [choose, setChoose] = useState("");
  const [timer, setTimer] = useState(true);
  const [score, setScore] = useState(0);

  const timerHandler = () => {
    setTimer(!timer);
  };

  const scoreHandler = (change) => {
    if (change === "YOU WIN") {
      setScore(score + 1)
    } else if (change === "YOU LOSE") {
      setScore(score - 1)
    }

  }
  const gameHandler = (type) => {
    setChoose(type);
    setGame(!game);
  };

  return (
    <div className="App">
      <Score score={score} />
      {game ? (
        <Game
          changeScore={scoreHandler}
          changeGame={gameHandler}
          time={timer}
          timer={timerHandler}
          choose={choose}
        />
      ) : (
        <GameField changeGame={gameHandler} />
      )}
      <Footer />
    </div>
  );
}

export default App;
