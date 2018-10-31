import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import SearchBooks from './SearchBooks';

class ListBooks extends Component {
  state = {
    showSearchPage: this.props.showSearchPage,
  }
  static propTypes = {
    books: PropTypes.array.isRequired,
  }
  render() {
    const {books} = this.props;
    const read = books.filter(book => book.shelf === 'read');
    const wantToRead = books.filter(book => book.shelf === 'wantToRead');
    const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');

    return (
      <div className="app" data-test="component-app">
        {this.state.showSearchPage ? (
          <SearchBooks books={books} />
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
