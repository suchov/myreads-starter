import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class ListBooks extends Component {
  state = {
    showSearchPage: this.props.showSearchPage,
  }
  static propTypes = {
    books: PropTypes.array.isRequired,
  }
  render() {
    const read = this.props.books.filter(book => book.shelf === 'read');
    const wantToRead = this.props.books.filter(book => book.shelf === 'wantToRead');
    const currentlyReading = this.props.books.filter(book => book.shelf === 'currentlyReading');
    return (
      <div className="app" data-test="component-app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {currentlyReading.map((book) => (
                        <li key={book.id}>
                          <Book book={book} />
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <ol className="books-grid">
                        {wantToRead.map((book) => (
                          <li key={book.id}>
                            <Book book={book}/>
                          </li>
                        ))}
                      </ol>
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {read.map((book) => (
                        <li key={book.id}>
                          <Book book={book} />
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
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
