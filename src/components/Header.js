import '../style/Header.css';
import nes from '../imgs/nes.jpg'
import React, {useState} from "react";

const Header = (props) => {
    const [bannerImage, setBannerImage] = useState(nes)
    return(
        <div id="Header">
            <div id="banner">
                <div id="titleText"><i>NESMANIA!!!</i></div>
                <img id="bannerImage" src={bannerImage}></img>
            </div>
        </div>
    )
};


export default Header;