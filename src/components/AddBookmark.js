import React from 'react';
import Bookmark from '../model/Bookmark'

class AddBookmark extends React.Component {
    constructor() {
        super()
        this.linkRef = React.createRef()
        this.labelRef = React.createRef()            
    }

    submitNewBookmark = () => {
        // check if link and label are not empty
        if (this.linkRef.current.value === "" || this.labelRef.current.value === "") {
            alert("Link and label cannot be empty")
            return
        }

        // let parent component know about new bookmark
        this.props.addBookmarkCallback(new Bookmark(
            this.linkRef.current.value,
            this.labelRef.current.value))

        // clear input fields
        async function clearInputFields() {
            console.log("Clearning input fields")
            this.linkRef.current.value = ""
            this.labelRef.current.value = ""
        }
        clearInputFields.bind(this)()
    }

    render() {
        return (
            <div className="addLinksDiv">
                <label htmlFor="inputLinkId" style={{paddingRight: 8}}>Link:</label>
                <input type="text" id="inputLinkId" ref={this.linkRef}></input>
                <br />
                <label htmlFor="inputLabelId">Label:</label>
                <input id="inputLabelId" type="text" ref={this.labelRef}></input>
                <br />
                <button className="submitButton"
                    type="button"  onClick={this.submitNewBookmark}>Submit
                </button>
            </div>
        )
    }
}

export default AddBookmark