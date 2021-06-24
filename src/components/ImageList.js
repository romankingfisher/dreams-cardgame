import React from 'react'
import Image from './Image'
import Recent from './Recent'

import './styles/ImageList.css'

class ImageList extends React.Component {

        

    state = {
        mostRecent: ''
    }

       render() {
        
        const imagePaths = this.props.images.map(image => image.path)


        return (
            <div>
                <div className="grid-container">
                    {/* {this.props.images.map(image => <Image getRecent={this.recent} image={image.path}  />)} */}
                    {imagePaths.map(image => <Image image={image} />)}  
                    <Recent className="recent" recentPaths = {imagePaths} searchTerm={this.props.searchTerm}/>    
                </div>             
            </div>
        )
    }

}

export default ImageList