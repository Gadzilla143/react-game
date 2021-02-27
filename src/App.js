import "./App.scss";
import React, { useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { GameField } from "./components/GameField/GameField";
import { Score } from "./components/Score/Score";
import { Game } from "./components/Game/Game";
import { Settings } from "./components/Settings/Settings";
import win from "./assets/sound/win.mp3";
import click from "./assets/sound/click.mp3";
import lose from "./assets/sound/lose.mp3";
import loop from "./assets/sound/loop.mp3";
import draw from "./assets/sound/draw.mp3";
import { Howl } from "howler";
import { Stats } from "./components/Stats/Stats";

function App() {
  const [settingsActive, setSettingsActive] = useState(false);
  const [statsActive, setStatsActive] = useState(false)
  const [volume, setVolume] = useState(0.1);
  const [loopVolume, setLoopVolume] = useState(0.1);
  const [mute, setMute] = useState(false);
  const [game, setGame] = useState(false);
  const [choose, setChoose] = useState("");
  const [timer, setTimer] = useState(true);
  const [score, setScore] = useState(Number.parseInt(localStorage.getItem('counter')) || 0);
  const [color, setColor] = useState("#182b52");
  const [timerDuration, setTimerDuration] = useState(3)
  const [scoreBoardSize, setScoreBoardSize] = useState(600)
  const [stats, setStats] = useState([])

  

  const clickPlay = () => {
    const sound = new Howl({
      src: click,
      volume: volume,
    });
    if (!mute) {
      sound.play();
    }
  };
  const Play = (judge, user, comp) => {
    let snd;
    
    if (judge === "YOU WIN") {
      snd = win;
    } else if (judge === "YOU LOSE") {
      snd = lose;
    } else {
      snd = draw;
    }
    setStats(stats.concat({
      user,
      comp,
      judge
    }))
    const sound = new Howl({
      src: snd,
      volume: volume,
    });
    if (!mute) {
      sound.play();
    }
  };
  const loopPlay = () => {
    const sound = new Howl({
      src: loop,
      volume: loopVolume,
      autoplay: true,
      loop: true,
    });
    sound.play();
  };

  const timerHandler = () => {
    setTimer(!timer);
  };

  const scoreHandler = (change) => {
    if (change === "YOU WIN") {
      setScore(score + 1);
      localStorage.setItem('counter', Number.parseInt(score) + 1);
    } else if (change === "YOU LOSE") {
      setScore(score - 1);
      localStorage.setItem('counter', Number.parseInt(score) - 1);
    }
    
  };
  const gameHandler = (type) => {
    setChoose(type);
    setGame(!game);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: color,
      }}
    >
      <Score 
        size={scoreBoardSize}

        score={score}
      />
      {game ? (
        <Game
          
          score={score}
          duration={timerDuration}
          Play={Play}
          clickPlay={clickPlay}
          changeScore={scoreHandler}
          changeGame={gameHandler}
          time={timer}
          timer={timerHandler}
          choose={choose}
        />
      ) : (
        <GameField 
          setScore={setScore}
          score={score}
          clickPlay={clickPlay} 
          changeGame={gameHandler}
        />
        
      )}
      
      <Footer
        clickPlay={clickPlay}
        setActive={setSettingsActive}
        statsActive={setStatsActive}
      />
      
      <Settings
        size={scoreBoardSize}
        setSize={setScoreBoardSize}
        color={color}
        setColor={setColor}
        duration={timerDuration}
        setDuration={setTimerDuration}
        setLoopVolume={setLoopVolume}
        loopVolume={loopVolume}
        stop={loopPlay}
        volume={volume}
        setVolume={setVolume}
        setMute={setMute}
        mute={mute}
        active={settingsActive}
        setActive={setSettingsActive}
      />
      <Stats
        stats={stats}
        active={statsActive}
        setActive={setStatsActive}
      />
    </div>
  );
}

export default App;
