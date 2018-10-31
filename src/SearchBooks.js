import React, {Component} from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI';
import {Link} from 'react-router-dom';

class SearchBooks extends Component {
  state = {
    books: [],
    searchQuery: ''
  }

  searchBook = (query) => (
    BooksAPI.search(query)
      .then((books) => {
        this.setState(() => ({
          books: books
        }))
      })
  )

  render() {
    const {searchQuery} = this.state;
    const {books} = this.state;

    const searchFilter = searchQuery === ''
      ? books
      : books.filter((c) => (c.title.toLowerCase().includes(this.searchBook.toLowerCase())))

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={'/'} className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={(event) => this.searchBook(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {console.log(searchFilter)}
            {Array.isArray(books) > 0 && (searchFilter.map((book) => (
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
