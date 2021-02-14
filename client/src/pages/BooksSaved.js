import React, { useState, useEffect } from "react";
import StoredBooks from "../components/StoredBooks/StoredBooks";

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
  console.log(books);
  return (
    <div>
      <div>
        <h1>Saved Books</h1>
      </div>
      <div>
        <h1>Books On My List</h1>

        {books.length ? (
          <StoredBooks books={books} deleteBook={deleteBook} />
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    </div>
  );
};
export default BooksSaved;
