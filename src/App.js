import './style/App.css';
import React, {useState} from "react";
import Gameboard from './components/Gameboard.js';
import Header from './components/Header.js';

function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const gameOver = () => {
    if (score > highScore){
       setHighScore(score)
    }
    setScore(0)
  }

  console.log("App score: " + score)
  return (
    <div className="App">
      <Header score={score} highScore={highScore} />
      <Gameboard incrementScore={incrementScore} gameOver={gameOver} />
    </div>
  );
}

export default App;
