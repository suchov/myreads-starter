import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './ListBooks';

class BooksApp extends Component {
  state = {
    books: [],
    showSearchPage: false,
  }
  //get the array of the books from the API
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }


  render() {
    if (this.state.books.length === 0) {
      return <h2>Loading...</h2>
    } else {
      return (
        <ListBooks
          books={this.state.books}
          showSearchPage={this.state.showSearchPage}
          />
      )
    }
  }
}

export default BooksApp
