import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import Book from './Book';

class ListBooks extends Component {
  state = {
    showSearchPage: this.props.showSearchPage,
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
    const read = books.filter(book => book.shelf === 'read');
    const wantToRead = books.filter(book => book.shelf === 'wantToRead');
    const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');

    const searchFilter = searchQuery === ''
      ? books
      : books.filter((c) => (
        c.title.toLowerCase().includes(searchQuery.toLowerCase())
      ))

    return (
      <div className="app" data-test="component-app">
        {this.state.showSearchPage ? (
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
        ) : (
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
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default ListBooks;
