import React, { useState, useEffect } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
// import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
    // loadBooks();
    searchBook("Harry Potter");
  }, []);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    searchBook(formObject.title);
  }
  function searchBook(title) {
    API.search(title).then((res) => {
      console.log(res.data.items);
      setBooks(res.data.items);
      console.log("______________________");
    });
  }

  return (
    <main>
      <h1>Look For a Book to Read?</h1>
      <form>
        <input
          onChange={handleInputChange}
          name="title"
          placeholder="Title (required)"
        />
        <button disabled={!formObject.title} onClick={handleFormSubmit}>
          Search
        </button>
      </form>

      <div>
        <h1>Books Results</h1>
        {books.length > 0 ? (
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
                  <p>
                    {book.searchInfo
                      ? book.searchInfo.textSnippet
                      : book.subtitle}
                  </p>
                </div>

                <hr />
              </div>
            ))}
          </div>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    </main>
  );
}

export default Books;
