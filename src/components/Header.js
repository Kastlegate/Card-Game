import '../style/Header.css';
import nes from '../imgs/nes.png'
import React, {useState} from "react";

const Header = (props) => {
    const [bannerImage, setBannerImage] = useState(nes)
    return(
        <div id="Header">
            <div id="banner">
                <div id="score">
                    <div id="currentScore" className='scoreClass'>SCORE: {props.score}</div>
                    <div className='scoreClass'>HI-SCORE: {props.highScore} </div>
                </div>
                <div id="titleText"><i>NESMANIA!!!</i></div>
                <img id="bannerImage" src={bannerImage}></img>
            </div>
        </div>
    )
};


export default Header;