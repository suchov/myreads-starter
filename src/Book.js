import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Shelf from './Shelf'


class Book extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  }
  render(){
    const divStyle = {
      width: 128,
      height: 188,
      backgroundImage: `url(${'backgroundImage'})`
    }
    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={divStyle}>
            </div>
            <Shelf />
          </div>
            {this.props.books[0]
              ? <div className="book-title">{this.props.books[0].title}</div>
              : console.log('Oh!!!')}
            {this.props.books[0]
              ? <div className="book-authors">{this.props.books[0].authors}</div>
              : console.log('Oh!!!')}
            {this.props.books[0]
              ? console.log(this.props.books[0])
              : console.log('Oh!!!')}
        </div>

      </div>
    );
  }
}

export default Book;
