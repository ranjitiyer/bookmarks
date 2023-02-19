import React from 'react';
import Bookmark from '../model/Bookmark'

class ShowLinks extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="showLinks">                
            <ul>
            {this.props.bookmarks.length > 0 && 
            this.props.bookmarks.map((item, index) => <li key={index}><a href={item.link}>{item.label}</a></li>)}
            </ul>
          </div>
        )
    }
}

export default ShowLinks