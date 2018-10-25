import React from 'react';
import Shelf from './Shelf'

const Book = ({backgroundImage, bookTitle, bookAuthors}) => {
  const divStyle = {
    width: 128,
    height: 188,
    backgroundImage: `url(${backgroundImage})`
  };
  return (
    <div>

      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={divStyle}>

          </div>
          <Shelf />
        </div>
        <div className="book-title">{bookTitle}</div>
        <div className="book-authors">{bookAuthors}</div>
      </div>

    </div>
  );
}

export default Book;
