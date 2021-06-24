import React from 'react'
import './Recent.css'

class Recent extends React.Component {

  

    state = {
        recent: [],
        searchTerm : ''
    }

    saveRecents = () => {
        const images = this.props.recentPaths.map(path => <img src= {"images/" + path} className="recentimg" alt={path} /> )
        this.setState({recent: [...images], searchTerm:this.props.searchTerm })
    }

    render() {
          
        return (
            <div  className={this.props.className}>
                <button onClick={this.saveRecents}>Save Search</button>
                <figure>
                    <figcaption><em>{ this.state.searchTerm }</em> </figcaption>
                    {this.state.recent} 
                </figure>
            </div>
        )
    }


}

export default Recent