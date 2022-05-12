import './style/App.css';
import React, {useState} from "react";
import Gameboard from './components/Gameboard.js';
import Header from './components/Header.js';
import GameOverPrompt from './components/GameOverPrompt.js';

function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOverShow, setGameOverShow] = useState(false)

  const incrementScore = () => {
    setScore(score + 1);
  };

  const gameOver = () => {
    if (score > highScore){
       setHighScore(score)
    }
    setScore(0)
    setGameOverShow(false)
  }

  console.log("App score: " + score)
  return (
    <div className="App">
      <Header score={score} highScore={highScore} />
      { gameOverShow ? <GameOverPrompt score={score} highScore={highScore} gameOver={gameOver} /> :null}
      { !gameOverShow ? <Gameboard incrementScore={incrementScore} toggleGameOver={setGameOverShow} /> :null}
    </div>
  );
}

export default App;
