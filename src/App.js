import React from 'react';
import './App.css';
import AddLink from './components/AddLink'
import ShowLinks from './components/ShowLinks'

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {bookmarks: JSON.parse(localStorage.getItem("bookmarks"))}

    // can't be called in a class
    // React.useEffect(() => {
    //   localStorage.setItem("bookmarks", JSON.stringify(this.state.bookmarks))
    // }, [this.state.bookmarks])
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
          <AddLink addBookmarkCallback={this.addBookmark}/>
          <hr/>        
          <ShowLinks bookmarks={this.state.bookmarks} />
        </div>
      </div>
    );
  }
}

export default App;
