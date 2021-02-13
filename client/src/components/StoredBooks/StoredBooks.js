import React from "react";

const StoredBooks = ({ books, deleteBook }) => {
  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <a to={"/books/" + book._id}>
              <strong>
                {book.title} by {book.author}
              </strong>
            </a>
            <button onClick={() => deleteBook(book._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoredBooks;
