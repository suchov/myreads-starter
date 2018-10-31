import React from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';

const MoveShelf = (props) => {
    return (
      <div className="book-shelf-changer">
        {console.log('!!!!!!' + props.shelf)}
        <select value={props.shelf || 'none'} onChange={(event) => (console.log(event.target.value))}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
}
MoveShelf.propTypes = {
  book: PropTypes.object.isRequired,
  shelf: PropTypes.string.isRequired
}

export default MoveShelf;
