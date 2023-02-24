import React from 'react';
import Bookmark from '../model/Bookmark'
import { FaTrash } from "react-icons/fa";

class ShowBookmarks extends React.Component {
    constructor(props) {
        super(props)
    }

    makeListItems(bookmarks) {
        return this.props.bookmarks
            .map((item, index) =>
                <li key={index} className="listItem">
                    <a href={item.link}>{item.label}</a>
                </li>)
    }  

    // notify parent
    searchCallback = (event) => {
        this.props.searchCallback(event.target.value)
    }


    render() {
        return (
            <div className="showLinks">
                <input className="search" type="text" 
                    onChange={this.searchCallback}
                    placeholder="Search" />
                <ul>{this.makeListItems(this.props.bookmarks)}</ul>
            </div>
        )
    }
}

export default ShowBookmarks
