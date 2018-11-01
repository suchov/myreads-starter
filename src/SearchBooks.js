import React, {Component} from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI';
import {Link} from 'react-router-dom';

class SearchBooks extends Component {
  state = {
    books: [],
  }

  searchBook = (query) => (
    BooksAPI.search(query)
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  )

  render() {
    const {books} = this.state;


    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={'/'} className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by search" onChange={(event) => this.searchBook(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {Array.isArray(books) > 0 && (books.map((book) => (
              <li key={book.id}>
                <Book book={book}/>
              </li>
            )))}
          </ol>
        </div>
      </div>
    )
  }
}
export default SearchBooks;
