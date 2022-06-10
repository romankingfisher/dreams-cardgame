import React, {useState} from 'react'
import imageCategories from '../resources/imageCategories'

import '../styles/CardTable.css'
import '../styles/CardTable.scss';

const CardTable = ({cardsSelected}) => {

    // get five random numbers to determine the categories
    // get five random scores from 1 to 9
    // build the cards: each of the five has an image with styling 
    // (border color, zoomed in image, bevelled edges, and score)

    const [randomNums, setRandomNums] = useState([])
    let [allSelected, setAllSelected] = useState([])

    // const playCards = (event) => {
    //     // console.log(parseInt(allSelected[0].score) * 2 ) // WORKS
    //     // pass in hardcoded values for wildcards (greater than 8; but don't display them)
    //     // console.log(allSelected[0].score === '' ? 'wildcard': allSelected[0].score) // for when a wildcard is selected (no number)
    //     console.log(allSelected);
    //     allSelected.forEach( (card) =>  {
    //         // console.log(card.score);
    //         console.log(card.key);
    //     })    
    // }

    const cardSelected = (event) => {
        // REVIEW: important for accessing the parent -- currentTarget
        // console.log(event.currentTarget.classList)
        // event.target is what is clicked -- ex: the image itself

        const score = event.currentTarget.innerText
        const key = event.target.alt       
        const eventCheck = event.currentTarget.classList
    
        function putBackCard (index) {
			allSelected.splice(index,1);
        }

        //returns index of item, if found
        // returns -1 if item not found
        function searchAllSelected() {
             let obj = allSelected.find(x => x.key  === key)
             return allSelected.indexOf(obj)
             //REFERENCE: for (let {investor, value, investment} of originalData) {
            //     newData.find(x => x.investor === investor)[investment] += value;
            //   }            
        }
            
        //move line up: option + up arrow
        let result = searchAllSelected()
        // console.log(`result is: ${result}`)

        if (allSelected.length < 3) { 
           if (result > -1) {
            putBackCard(result);
            eventCheck.contains('cardSelected') ? 
            eventCheck.remove('cardSelected') : eventCheck.add('cardSelected')
           } 

           if (result === -1) {
            //    console.log(key);
                setAllSelected(allSelected.concat({key: key, score: score}))
                eventCheck.contains('cardSelected') ? 
                eventCheck.remove('cardSelected') : eventCheck.add('cardSelected')
           }             
        }

        if (result > 0 && allSelected.length === 3) {         
            eventCheck.remove('cardSelected')
            putBackCard(result)
            
        }
    }    

    const shuffleCards = () => {

        //reset allSelected at start of a new game
        setAllSelected([])

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
                  path: random_image,
                  key: getRandomKey()
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
        return Math.floor(Math.random() * 1500000) + 1;
    }

    let playerHand = randomNums.map((n) => {
        return (
            <div className="card" key={n.key}  onClick={cardSelected}>
                {/* className= {selectedCard ? 'cardSelected' : null }  */}
            <div    >
                <div className="score">   
                    <h1 className= {  n.style === "wildcard" ? "wildcard" : n.style}> {n.style === "wildcard" ? "W" : n.score}</h1>
                </div>
                
                <img src= {'images/' + n.style + "/" + n.path}  alt= {n.path+ "_" + n.key} />
            </div>
            </div>
        )
    }) 

    
        return (
            <div className="cardtable">
               
                  
                <div className="playerHand">
                    {playerHand}
                    <div className="buttonGroup">
                    <button className="ui basic button shuffleButton" onClick={shuffleCards}>Shuffle Cards</button> 
                    {/* only display if user has submitted three cards */}
                    {/* <button className="ui basic button playCards" onClick= {playCards}  >Play Cards</button>    */}
                    
                    <button className="ui basic button playCards" onClick ={()=> {
                        cardsSelected(allSelected);
                    }}>Play Cards</button>        
                    </div>
                </div>  
              
            </div>
        )
    
}

export default CardTable