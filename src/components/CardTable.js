import React, {useState} from 'react'
import imageCategories from '../resources/imageCategories'

import './styles/CardTable.css'

const CardTable = () => {

    // get five random numbers to determine the categories
    // get five random scores from 1 to 9
    // build the cards: each of the five has an image with styling 
    // (border color, zoomed in image, bevelled edges, and score)

    const [randomNums, setRandomNums] = useState([])
    

    

    const shuffleCards = () => {
        // reseting player hand to start a new game
        playerHand = []
        
        const card_builder = []
        for (let i=0; i < 5; i++) {
            
            //n selects the object
            let obj = Math.floor(Math.random() * imageCategories.length)

                
            // select an image from obj
            let random_image_index = Math.floor(Math.random() * imageCategories[obj].paths.length);
            let random_image = imageCategories[obj].paths[random_image_index];
            let random_style = imageCategories[obj].style;


            card_builder.push(
                { score: getRandomNumber(),
                  style: random_style,
                  path: random_image
                }
             );
        }


        setRandomNums(card_builder)
    }

    // https://stackoverflow.com/questions/55987953/how-do-i-update-states-onchange-in-an-array-of-object-in-react-hooks
    
   
    const getRandomNumber = () => {
        return Math.floor(Math.random() * 8) + 1;
    };

    const getRandomKey = () => {
        return Math.floor(Math.random() * 15000) + 1;
    }

    let playerHand = randomNums.map((n) => {
        return (
            <div className="cards">
            <div  key={getRandomKey()}>
                <div className="score">
                
                    <h1 className= {n.style === "wildcard" ? " " : n.style}> {n.style === "wildcard" ? "" : n.score}</h1>
                </div>
                
                <img src= {'images/' + n.style + "/" + n.path}  alt= {n.path} />
            </div>
            </div>
        )
    }) 

    
        return (
            <div className="cardtable">
                <h1>Dreams</h1>
                <caption>
                    run: <em>Earn 1.5x Ex:</em> 4,5,6<br/>
                    three of a kind: <em>Earn double</em> Ex: 5,5,5
                </caption>
                <button className="ui basic button shuffleButton" onClick={shuffleCards}>Shuffle Cards</button> 
                {/* only display if user has submitted three cards */}
                <button className="ui basic button playCards" >Play Cards</button>   
                <div className="playerHand">
                    {playerHand}
                </div>         
                
            </div>
        )
    
}

export default CardTable