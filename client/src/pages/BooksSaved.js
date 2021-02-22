import React, { useState, useEffect } from "react";
import StoredBooks from "../components/StoredBooks/StoredBooks";
import { Jumbotron } from "react-bootstrap";
import API from "../utils/API";

const BooksSaved = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
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
  return (
    <div>
      <Jumbotron className="text-center">
        <h1>Saved Books</h1>
        <p>Delete a book or go visit the page to buy it</p>
      </Jumbotron>
      <div>
        <div className="text-center">
          <h1>Books On My List</h1>
        </div>

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
