import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {
  state = {
    searchQuery: ''
  }
  static propTypes = {
    books: PropTypes.array.isRequired,
  }
  handleChange = (searchQuery) => {
    this.setState(() => ({
      searchQuery: searchQuery.trim()
    }))
  }

  render() {
    const {searchQuery} = this.state;
    const {books} = this.props;

    const searchFilter = searchQuery === ''
      ? books
      : books.filter((c) => (c.title.toLowerCase().includes(searchQuery.toLowerCase())))

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={searchQuery} onChange={(event) => this.handleChange(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {/* this is where the search should shows up */}
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
