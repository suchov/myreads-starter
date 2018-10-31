import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';

class Dropdown extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
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

export default Dropdown;
