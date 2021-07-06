import React, {useState} from 'react'
import imageCategories from '../resources/imageCategories'

import './styles/CardTable.css'

const CardTable = () => {

    // get five random numbers to determine the categories
    // get five random scores from 1 to 9
    // build the cards: each of the five has an image with styling 
    // (border color, zoomed in image, bevelled edges, and score)

    const [randomNums, setRandomNums] = useState([])
    
    // let [numCardsSelected, setNumCardsSelected] = useState(0)

    let [allSelected, setAllSelected] = useState([])

    const playCards = (event) => {
        // console.log(parseInt(allSelected[0].score) * 2 ) // WORKS
        // pass in hardcoded values for wildcards (greater than 8; but don't display them)
        console.log(allSelected[0].score === '' ? 'wildcard': allSelected[0].score) // for when a wildcard is selected (no number)
        // console.log(allSelected)
    }

    const cardSelected = (event) => {
        

        let score = event.target.innerText
        // console.log(`The score is: ${score}`)

        // let allSelected = [];
        let imageName = event.target.innerHTML
        const eventCheck = event.target.classList
        // console.log(event)
        // console.log(imageName)


        // setNumCardsSelected(numCardsSelected += 1) 
        // console.log(numCardsSelected)

        // what is event.target? the card itself?
        
        // let flag = allSelected.length === 3 ? false : true;


        //remove if selection is clicked again
        function putBackCard (index) {
            
            // get object index
            // let i = allSelected.indexOf(imageName)
			allSelected.splice(index,1);
            // console.log(`index is ${i}`)
        }

        //will search allSelected
        function searchAllSelected() {
             let obj = allSelected.find(x => x.img  === imageName)
            //  console.log(`obj is ${obj}`)
             let i = allSelected.indexOf(obj)

             return i
           
            // for (let {investor, value, investment} of originalData) {
            //     newData.find(x => x.investor === investor)[investment] += value;
            //   }
            
        }

        //if allSelected.length < 1 ... add 
        
        //move line up: option + up arrow
        let result = searchAllSelected()
        if (allSelected.length < 3) {
            
            //search the object return t / f if imageName is present
           
        //    result = searchAllSelected()
        //    console.log(`searchAllSelected is ${searchAllSelected()}`)

            // allSelected.includes(imageName) ? 
            
            if (result > -1) putBackCard(result);

           if (result === -1) setAllSelected(allSelected.concat({img: imageName, score: score}))
            
            console.log(allSelected)

            eventCheck.contains('cardSelected') ? 
            eventCheck.remove('cardSelected') : eventCheck.add('cardSelected')
            
        }

        //search object for imangeName ... return true or false

        // if (allSelected.includes(imageName) && allSelected.length === 3) {
        if (result > 0 && allSelected.length === 3) {
            eventCheck.remove('cardSelected')
            putBackCard(result)
            
        }




		// //remove el
		function remove(el) {
			let i = allSelected.indexOf(el)
			allSelected.splice(i,1);
		}

        
		function selected(el) {

            //check if three are selected already
			let flag = allSelected.length === 3 ? false : true;
			
            // all 3 selected -- only option is to remove one -- nothing new added
			 if (allSelected.includes(el) && allSelected.length === 3) {
				el.classList.toggle("selected");
				remove(el);
				flag = false;
			}

            //if less than 3 and want to remove card (change your mind before 3; 0 1 or 2 cards selected)  
			if (allSelected.length < 3 && flag) {
				el.classList.toggle("selected")
				allSelected.includes(el) ? remove(el) : allSelected.push(el);
			}			
		}


        
        // console.log(event.target) --> shows the image path and alt
        // setSelectedCard(!selectedCard)

        // will select ALL of the cards
        // this.setState({selectedCard: !this.state.selectedCard})
        
    }    

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
            <div className="cards" onClick={cardSelected}>
                {/* className= {selectedCard ? 'cardSelected' : null }  */}
            <div  key={getRandomKey()} >
                <div className="score">   
                    <h1 className= {  n.style === "wildcard" ? " " : n.style}> {n.style === "wildcard" ? "" : n.score}</h1>
                </div>
                
                <img src= {'images/' + n.style + "/" + n.path}  alt= {n.path} />
            </div>
            </div>
        )
    }) 

    
        return (
            <div className="cardtable">
                <h1>Dreams</h1>
                <table>
                <caption>
                    run: <em>Earn 1.5x Ex:</em> 4,5,6<br/>
                    three of a kind: <em>Earn double</em> Ex: 5,5,5
                </caption>
                </table>
                <button className="ui basic button shuffleButton" onClick={shuffleCards}>Shuffle Cards</button> 
                {/* only display if user has submitted three cards */}
                <button className="ui basic button playCards" onClick= {playCards}>Play Cards</button>   
                <div className="playerHand">
                    {playerHand}
                </div>         
                
            </div>
        )
    
}

export default CardTable