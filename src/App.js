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

  const timerHandler = () => {
    
    setTimer(!timer)
    console.log(timer)
  }

  const gameHandler = (type) => {
    console.log(type);
    setChoose(type);
    setGame(!game);
  };

  return (
    <div className="App">
      <Score />
      {game ? (
        <Game changeGame={gameHandler} time={timer} timer={timerHandler} choose={choose} />
      ) : (
        <GameField changeGame={gameHandler} />
      )}

      <Footer />
    </div>
  );
}

export default App;
