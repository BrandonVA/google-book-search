import React, { useState, useEffect } from "react";

import API from "../utils/API";
// import { Link } from "react-router-dom";

const BooksSaved = () => {
  const [books, setBooks] = useState([]);
  //   const [formObject, setFormObject] = useState({});

  useEffect(() => {
    loadBooks();
    // searchBook("Harry Potter");
  }, []);

  function loadBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  function deleteBook(id) {
    API.deleteBook(id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  }

  //   function handleInputChange(event) {
  //     const { name, value } = event.target;
  //     setFormObject({ ...formObject, [name]: value });
  //   }

  return (
    <div>
      <div>
        <h1>Saved Books</h1>
      </div>
      <div>
        <h1>Books On My List</h1>

        {books.length ? (
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
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    </div>
  );
};
export default BooksSaved;
