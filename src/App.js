import React from 'react'

import CardTable from './components/CardTable'

import './components/styles/App.css'



class App extends React.Component {
        // todo:
        /*
            add a word list -- a word cloud -- section for potential words to enter; user can click on these and see results
                - maybe a word cloud instead of a search bar ???
            create a v2 with "keyword buttons" instead of an input field
            have a recents category / component (much smaller images)
        */

    state = {
        images: [
            {img: 'irina', path: 'i.jpg', desc: ['i', 'russian', 'stockings', 'smokin', 'bed', 'lingerie']},     
            {img: 'steph', path: 'ss.jpg', desc: ['bikini', 'smokin'] },
            {img: 'kate', path: 'k.jpg', desc: ['k', 'blonde', 'topless', 'smokin', 'bombshell'] },
            {img: 'barbara1', path: 'bp.jpg', desc: ['bp', 'lingerie', 'smokin', 'bombshell'] },
            {img: 'barbara2', path: 'bp2.jpg', desc: ['bp2', 'bikini', 'smokin', 'bombshell'] },
            {img: 'bp3', path: 'bp3.jpg', desc: ['bp3', 'stockings', 'lingerie', 'smokin'] },
            {img: 'ah', path: 'ah.jpg', desc: ['ah', 'blonde', 'topless', 'smokin', 'tennis'] },
            {img: 'hd', path: 'hd.jpg', desc: ['h', 'blonde', 'bikini', 'smokin', 'ass'] }
        ],
        searchTerm: 'smokin',
        mostRecent: [],
        cardsPicked: []
    }

    editSearchTerm = e => {    
        this.setState({searchTerm:e.target.value})
    }

    dynamicSearch = () => {     
        this.update = this.state.images.filter(image => image.desc.includes(this.state.searchTerm.toLowerCase()))
        return this.update
    }

    displayRecent = () => {
        // use setState to change mostRecent
        // pass mostRecent as a prop to <Recent/>

        this.setState({
            mostRecent: [this.state.searchTerm]

        })

        console.log(this.state.mostRecent)
    }

    // practice passing information around between components
    // parent to siblings and back

    
    displayCardsSelected = (allCardsSelected) =>{
        // console.log(allCardsSelected);
       
        //use return!!!
       let temp = allCardsSelected.map((card) => {
           return (
               <div key={card.key}>          
                    <h1>{card.score}</h1>
               </div>        
           )
            // review when I do and don't want to use this:
            // // review [...array]
        })


        this.setState({cardsPicked: temp})
    }


    render() {
        return (
            <div>
                <h1>Dreams</h1>
                
                <CardTable className="cardtable" cardsSelected={this.displayCardsSelected} />
                {/* <input type= 'text' value= {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'Search for an image'/>
                
                <ImageList images = {this.dynamicSearch()}  searchTerm = {this.state.searchTerm} /> */}
                
                <div className="displayKeys">{this.state.cardsPicked} </div>
                
            </div>
        )
    }
}

export default App