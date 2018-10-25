import React from 'react';
// import * as BooksAPI from './BooksAPI';
import './App.css';
import Book from './Book'
import {books} from './books';

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
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
                      <li>
                        <Book id={books[0].id} backgroundImage={books[0].backgroundImage} bookTitle={books[0].bookTitle} bookAuthors={books[0].bookAuthors} />
                      </li>
                      <li>
                        <Book id={books[1].id} backgroundImage={books[1].backgroundImage} bookTitle={books[1].bookTitle} bookAuthors={books[1].bookAuthors}/>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        <Book id={books[2].id} backgroundImage={books[2].backgroundImage} bookTitle={books[2].bookTitle} bookAuthors={books[2].bookAuthors}/>
                      </li>
                      <li>
                        <Book id={books[3].id} backgroundImage={books[3].backgroundImage} bookTitle={books[3].bookTitle} bookAuthors={books[3].bookAuthors}/>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <li>
                        <Book id={books[4].id} backgroundImage={books[4].backgroundImage} bookTitle={books[4].bookTitle} bookAuthors={books[4].bookAuthors}/>
                      </li>
                      <li>
                        <Book id={books[5].id} backgroundImage={books[5].backgroundImage} bookTitle={books[5].bookTitle} bookAuthors={books[5].bookAuthors}/>
                      </li>
                      <li>
                        <Book id={books[6].id} backgroundImage={books[6].backgroundImage} bookTitle={books[6].bookTitle} bookAuthors={books[6].bookAuthors}/>
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

export default BooksApp
