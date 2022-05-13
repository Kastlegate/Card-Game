import './style/App.css';
import React, {useState} from "react";
import Gameboard from './components/Gameboard.js';
import Header from './components/Header.js';
import GameOverPrompt from './components/GameOverPrompt.js';

function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [toggleGameOver, setToggleGameOver] = useState(false)

  const incrementScore = () => {
    setScore(score + 1);
  };

  const gameOver = () => {
    if (score > highScore){
       setHighScore(score)
    }
    setScore(0)
    setToggleGameOver(false)
  }

  console.log("App score: " + score)
  return (
    <div className="App">
      <Header score={score} highScore={highScore} />
      { toggleGameOver ? <GameOverPrompt score={score} highScore={highScore} gameOver={gameOver} /> :null}
      { !toggleGameOver ? <Gameboard incrementScore={incrementScore} toggleGameOver={setToggleGameOver} /> :null}
    </div>
  );
}

export default App;
