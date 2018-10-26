import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  }
  state = {
    showSearchPage: false,
  }
  render() {
    return (
      <div className="app" data-test="component-app">
        {this.props.showSearchPage ? (
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
                      <li>
                        {this.props.books[0]
                          ? <Book book={this.props.books[0]} />
                          : console.log('Oh!!!')}
                      </li>
                      <li>
                        {this.props.books[1]
                          ? <Book book={this.props.books[1]} />
                          : console.log('Oh!!!')}
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        {this.props.books[2]
                          ? <Book book={this.props.books[2]} />
                          : console.log('Oh!!!')}
                      </li>
                      <li>
                        {this.props.books[3]
                          ? <Book book={this.props.books[3]} />
                          : console.log('Oh!!!')}
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>

                      </li>
                      <li>

                      </li>
                      <li>

                      </li>
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
