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
            <form>
                <div className="form-group-1">
                    <input type="text" id="inputLinkId" ref={this.linkRef} placeholder="Enter link"></input>
                </div>
                <div className="form-group-1">
                    <input id="inputLabelId" type="text" ref={this.labelRef} placeholder="Enter label"></input>
                </div>
                <button className="submitButton" type="button" onClick={this.submitNewBookmark}>Add</button>
            </form>
        )
    }
}

export default AddBookmark