import '../style/Gameboard.css';
import React, {useEffect, useState} from "react";
import CardTemplate from './CardTemplate.js';
import cards from './cardDeck.js'


function Gameboard(props) {
    // creating a variable for the card deck in state
    const [cardDeck, setCardDeck] = useState(cards)
    const [clicked, setClicked] = useState(false)

    const incrementScore = () => {
        props.incrementScore()
    }



    //function to handle when a card is clicked
    const handleCardClicked = (id, name, clicked) =>{ 
        // searches through the cardDeck array, using the unique id of the card that was clicked, to find the card's index in the array     
        let i = cardDeck.findIndex(x => x.id===id);
        // uses the index to see if the card has already been clicked
        if(cardDeck[i].clicked === true){
            setClicked(cardDeck.forEach( element => {element.clicked=false})) 
            setCardDeck(prevValue => [...cards])
            return props.gameOver()
        };
        
        incrementScore()
        //changes the value of clicked to true
        setClicked(cardDeck[i].clicked=true)        
        // uses sort to shuffle the array of cards       
        setCardDeck(prevValue => [...prevValue].sort(() => Math.random() - 0.5));
    };

  return (
    <div id="gameboard">
        {/* maps the card daeck array and gives props to the CardTemplate component to render */}
        {cardDeck.map((card) => {
                      return <div onClick={() => {handleCardClicked(card.id, card.name, card.clicked)}} key={card.id} >
                          <CardTemplate src={card.image} name={card.name} />
                          </div>;
                    })}

    </div>
  );
}

export default Gameboard;