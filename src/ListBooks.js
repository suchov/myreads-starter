import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';
import {Link} from 'react-router-dom';

class ListBooks extends Component {
  state = {
    books: [],
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    const {books} = this.state;
    const read = books.filter(book => book.shelf === 'read');
    const wantToRead = books.filter(book => book.shelf === 'wantToRead');
    const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf books={currentlyReading} shelfName={'Currently Reading'}/>
            <BookShelf books={wantToRead} shelfName={'Want to Read'}/>
            <BookShelf books={read} shelfName={'Read'}/>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks;
