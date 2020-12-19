import React from 'react'
import './App.css';
import Header from './Components/Header'
import Booklist from './Components/Booklist'
import Shelf from './Components/Shelf'
import Searchbar from './Components/Searchbar'
import data from './data'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      books: [...data],
      shelf: [],
      input: ""
    }

    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
    this.updateInput = this.updateInput.bind(this)
  }

  addToShelf(index) {
      this.setState({
        shelf: [...this.state.shelf, this.state.books[index]]
      })
  }

  clearShelf() {
    this.setState({
      shelf: []
    })
  }

  filterBooks(input) {
    let filteredBooks = this.state.books.filter((book) => {
      if (book.title.includes(input)) {
        return book
      }
    })

    this.setState({
      books: filteredBooks
    })
  }

  clearSearch() {
    document.getElementById('inputLabel').value = ''
    this.setState({
      books: [...data],
      input: ""
    })
  }

  updateInput(event) {
    let input = event.target.value
    this.setState({
      input: input
    })
  }

  render() {
    console.log(this.state.shelf)
    return (
      <div className="App">
        <Header />
        <section className="search-area">
          <Searchbar filterBooks={this.filterBooks} clearSearch={this.clearSearch} updateInput={this.updateInput} input={this.state.input}/>
        </section>
        <section className="main">
          <Booklist books={this.state.books} addToShelf={this.addToShelf} />
          <Shelf shelf={this.state.shelf} clearShelf={this.clearShelf} />
        </section>
      </div>
    );
  }
}

export default App;
