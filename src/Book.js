import React from 'react';

const Book = (props) => {
  const divStyle = {
    width: 128,
    height: 193,
    backgroundImage: `url(${props.backgroundImage})`
  };
  return (
    <div>

      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={divStyle}>

          </div>
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.bookTitle}</div>
        <div className="book-authors">{props.bookAuthors}</div>
      </div>

    </div>
  );
}

export default Book;
