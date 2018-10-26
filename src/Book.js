import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Shelf from './Shelf'


class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
  }
  render(){
    const {book} = this.props
    const divStyle = {
      width: 128,
      height: 188,
      backgroundImage: `url(${book.imageLinks.smallThumbnail})`
    }

    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={divStyle}>
            </div>
            <Shelf />
          </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
        </div>
      </div>
    );
  }
}

export default Book;
