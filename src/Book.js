import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Shelf from './Shelf'


class Book extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired
  }

  state = {
    title: '',
  }

  render() {
    const { book } = this.state
    const divStyle = {
      width: 128,
      height: 188,
      backgroundImage: `url('https://www.google.com')`
    };
    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={divStyle}>
              {console.log(book)}
            </div>
            <Shelf />
          </div>
          <div className="book-title">{'title'}</div>
          <div className="book-authors">{'authors'}</div>
        </div>

      </div>
    );
  }
}

export default Book;
