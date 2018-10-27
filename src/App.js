import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './ListBooks';

class BooksApp extends Component {
  state = {
    books: [],
    showSearchPage: false,
    searchField: ''
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
    return (
      <ListBooks
        books={this.state.books}
        />
    )
  }
}

export default BooksApp
