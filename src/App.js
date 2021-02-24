import "./App.scss";
import React, { useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { GameField } from "./components/GameField/GameField";
import { Score } from "./components/Score/Score";
import { Game } from "./components/Game/Game";
import { Settings } from "./components/Settings/Settings";
import win from './assets/sound/win.mp3'
import click from './assets/sound/click.mp3'
import { Howl } from 'howler'
import loop from './assets/sound/loop.mp3'


function App() {
  const [settingsActive, setSettingsActive] = useState(false)
  const [volume, setVolume] = useState(0.1)
  const [mute, setMute] = useState(false)
  const [game, setGame] = useState(false);
  const [choose, setChoose] = useState("");
  const [timer, setTimer] = useState(true);
  const [score, setScore] = useState(0);
  
  const clickPlay = () => {
    const sound = new Howl({
      src: click,
      volume: volume
    })
    if(!mute){
      sound.play()
    }
  }
  const winPlay = () => {
    const sound = new Howl({
      src: win,
      volume: volume
    })
    if(!mute){
      sound.play()
    }
  }
  const loopPlay = () => {
    const sound = new Howl({
      src: loop,
      volume: 0.1,
      autoplay: true,
      loop: true,
    })
    
    sound.play()
    
  }

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
    <div className="App" >
      <Score score={score} />
      {game ? (
        <Game
          Play={winPlay}
          clickPlay={clickPlay}
          changeScore={scoreHandler}
          changeGame={gameHandler}
          time={timer}
          timer={timerHandler}
          choose={choose}
        />
      ) : (
        <GameField clickPlay={clickPlay} changeGame={gameHandler} />
      )}
      <Footer clickPlay={clickPlay} setActive={setSettingsActive}/>
      <Settings stop={loopPlay} volume={volume} setVolume={setVolume} setMute={setMute} mute={mute} active={settingsActive} setActive={setSettingsActive}/>
      
    </div>
  );
}

export default App;
