import React from 'react'
import './Image.css'

class Image extends React.Component {

    //   images = this.props.image.map(image => {
    //     return <img src={'../imgs/' + image.path}  alt={image.path}/>
    // });

    // state = {
    //     mostRecent: ''
    // }


    // getRecent = () => {
    //     this.props.getRecent(this.props.image)
    // }


    render() {
        return (
            <div>
                
                {/* require now returns an object: the image is the "default" key */}
                {/* <img src={require('../imgs/' + this.props.image).default}   alt={this.props.image}  /> */}
                
                {/* don't need require if putting the images inside the public/ folder */}
                <img src={'images/' + this.props.image}  alt={this.props.image}  />
                {/* {this.getRecent} */}
            </div>
        )
    }
}

export default Image