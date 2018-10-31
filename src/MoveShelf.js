import React from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';

class MoveShelf extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    shelf: PropTypes.string.isRequired
  }
    handleChange = (selected) =>{
      BooksAPI.update(this.props.book, selected);
    }
  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.props.shelf || 'none'} onChange={event => this.handleChange(event.target.value)}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default MoveShelf;
