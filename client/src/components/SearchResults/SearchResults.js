import React from "react";

const SearchResults = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h4>{book.volumeInfo.title}</h4>
          <h6>
            {book.volumeInfo.authors
              ? book.volumeInfo.authors.map((name) => (
                  <strong> {name}, </strong>
                ))
              : "No Authors"}
          </h6>
          <div>
            <div></div>
            <div></div>

            {book.volumeInfo ? book.volumeInfo.description : book.subtitle}
          </div>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
