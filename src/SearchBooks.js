import React, {Component} from 'react';
import Book from './Book';
import * as BooksAPI from './BooksAPI';
import {Link} from 'react-router-dom';

class SearchBooks extends Component {
  state = {
    searchQuery: '',
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  handleChange = (searchQuery) => {
    this.setState(() => ({
      searchQuery: searchQuery.trim()
    }))
  }

  render() {
    const {searchQuery} = this.state;
    const {books} = this.state;

    const searchFilter = searchQuery === ''
      ? books
      : books.filter((c) => (c.title.toLowerCase().includes(searchQuery.toLowerCase())))

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={'/'} className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={searchQuery} onChange={(event) => this.handleChange(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchFilter.map((book) => (
              <li key={book.id}>
                <Book book={book}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}
export default SearchBooks;
