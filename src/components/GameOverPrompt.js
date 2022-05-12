import '../style/GameOverPrompt.css';
import React, {useState} from "react";

const GameOverPrompt = (props) => {
    const handleContinue = () => {
        props.gameOver() 
        window.scrollTo(0,0);
    }

   
    return(
        <div id="GameOverPrompt">
            <h1 className='gameOverItems'>GAME OVER!</h1>
            <div className='gameOverItems'>SCORE: {props.score}</div>
            <div className='gameOverItems'>HI-SCORE: {props.highScore}</div>
            <div id='continue' onClick={() => {handleContinue()}}>CONTINUE?</div>
        </div>
    )
};


export default GameOverPrompt;