import React from 'react';
import './App.css';
import AddBookmark from './components/AddBookmark'
import ShowBookmarks from './components/ShowBookmarks'

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {bookmarks: JSON.parse(localStorage.getItem("bookmarks"))}
  }  

  // callback from AddLink
  addBookmark = (bookmark) => {
    // add to state
    this.state.bookmarks.push(bookmark)

    // update state
    this.setState({bookmarks: this.state.bookmarks})
    
    // save to storage
    localStorage.setItem("bookmarks", JSON.stringify(this.state.bookmarks))
    console.log(localStorage.getItem("bookmarks"))
  }

  render() {
    return (
      <div className="App">        
        <div>
          <AddBookmark addBookmarkCallback={this.addBookmark}/>
          <hr/>        
          <ShowBookmarks bookmarks={this.state.bookmarks} />
        </div>
      </div>
    );
  }
}

export default App;
