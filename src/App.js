import React from 'react';
import './App.css';
import AddBookmark from './components/AddBookmark'
import ShowBookmarks from './components/ShowBookmarks'
import { FaTrash } from "react-icons/fa";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.initFromStorage()
  }

  initFromStorage = () => {
    this.state = {
      bookmarks: localStorage.getItem("bookmarks") == null ? [] :
        JSON.parse(localStorage.getItem("bookmarks"))
    }
  }

  saveToStorage = () => {
    localStorage.setItem("bookmarks", JSON.stringify(this.state.bookmarks))
  }

  forceRender() {
    this.setState({ bookmarks: this.state.bookmarks })
  }


  // callback from AddLink
  addBookmark = (bookmark) => {
    this.state.bookmarks.push(bookmark)
    this.forceRender()
    this.saveToStorage()
  }

  searchCallback = (searchString) => {
    if (searchString !== "") {
      let filteredBookmarks = this.state.bookmarks.filter((item) => {
        return item.label.toLowerCase().includes(searchString.toLowerCase())
      })
      this.setState({ bookmarks: filteredBookmarks })
    }
    else {
      this.initFromStorage()
      this.forceRender()
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <AddBookmark addBookmarkCallback={this.addBookmark} />
          <hr />
          <ShowBookmarks bookmarks={this.state.bookmarks} searchCallback={this.searchCallback} />
        </div>
      </div>
    );
  }
}

export default App;
