import '../style/Gameboard.css';
import React, {useState} from "react";
import Card from './Card.js';
import battletoads from '../imgs/battletoads.jpg'
import castlevania from '../imgs/castlevania1.png'
import castlevania2 from '../imgs/castlevania2.jpg'
import castlevania3 from '../imgs/castlevania3.jpg'
import contra from '../imgs/contra.jpg'
import ducktales from '../imgs/ducktales.jpg'
import finalfantasy from '../imgs/finalfantasy.jpg'
import kidicarus from '../imgs/kidicarus.jpg'
import kirby from '../imgs/kirby.jpg'
import mario from '../imgs/mario1.jpg'
import mario2 from '../imgs/mario2.jpg'
import mario3 from '../imgs/mario3.jpg'
import megaman2 from '../imgs/megaman2.jpg'
import metroid from '../imgs/metroid.jpg'
import ninjagaiden from '../imgs/ninjagaiden.jpg'
import punchout from '../imgs/punchout.jpg'
import rygar from '../imgs/rygar.jpg'
import turtles from '../imgs/turtles.jpg'
import zelda from '../imgs/zelda.jpg'
import zelda2 from '../imgs/zelda2.jpg'
import uniqid from "uniqid";

function Gameboard() {

    const cards = [
        {
            id: uniqid(),
            image: battletoads,
            name: "Battletoads"
        },
        {
            id: uniqid(),
            image: castlevania,
            name: "Castlevania"
        },
        {
            id: uniqid(),
            image: castlevania2,
            name: "Castlevania II"
        },
        {
            id: uniqid(),
            image: castlevania3,
            name: "Castlevania III"
        },
        {
            id: uniqid(),
            image: contra,
            name: "Contra"
        },
        {
            id: uniqid(),
            image: ducktales,
            name: "Ducktales"
        },
        {
            id: uniqid(),
            image: finalfantasy,
            name: "Final Fantasy"
        },
        {
            id: uniqid(),
            image: kidicarus,
            name: "Kid Icarus"
        },
        {
            id: uniqid(),
            image: kirby,
            name: "Kirby's Adventure"
        },
        {
            id: uniqid(),
            image: mario,
            name: "Super Mario Bros."
          },
          {
            id: uniqid(),
            image: mario2,
            name: "Super Mario Bros. 2"
        },
        {
            id: uniqid(),
            image: mario3,
            name: "Super Mario Bros. 3"
        },
        {
            id: uniqid(),
            image: megaman2,
            name: "Mega Man 2"
        },
        {
            id: uniqid(),
            image: metroid,
            name: "Metroid"
        },
        {
            id: uniqid(),
            image: ninjagaiden,
            name: "Ninja Gaiden"
        },
    //     // {
    //     //     id: uniqid(),
    //     //     image: punchout,
    //     //     name: "Mike Tyson's Punch-Out"
    //     // },
    //     // {
    //     //     id: uniqid(),
    //     //     image: rygar,
    //     //     name: "Rygar"
    //     // },
    //     // {
    //     //     id: uniqid(),
    //     //     image: turtles,
    //     //     name: "Teenage Mutant Ninja Turtles: The Arcade Game"
    //     // },
    //     // {
    //     //     id: uniqid(),
    //     //     image: zelda,
    //     //     name: "The Legend of Zelda"
    //     // },
    //     // {
    //     //     id: uniqid(),
    //     //     image: zelda2,
    //     //     name: "Zelda II: The Adventure of Link"
    //     // },
    ]
    const [cardDeck, setCardDeck] = useState(cards)

    const cardClicked = (name) =>{
        // alert(name)
        setCardDeck(prevValue => [...prevValue].sort(() => Math.random() - 0.5));
    };

  return (
    <div id="gameboard">
        
        {cardDeck.map((card) => {
                      return <div onClick={() => {cardClicked(card.name)}} key={card.id} >
                          <Card src={card.image} name={card.name} />
                          </div>;
                    })}

    </div>
  );
}

export default Gameboard;