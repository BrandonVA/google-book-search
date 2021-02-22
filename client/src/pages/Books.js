import React, { useState, useEffect } from "react";
import SearchResults from "../components/SearchResults/SearchResults";
import API from "../utils/API";
import { Button, Jumbotron, InputGroup, FormControl } from "react-bootstrap";

function Books() {
  const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});

  useEffect(() => {
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
    API.searchGoogle(title).then((res) => {
      console.log(res.data.items);
      setBooks(res.data.items);
      console.log("______________________");
    });
  }

  return (
    <main style={{ margin: "10px" }}>
      <Jumbotron className="text-center">
        <h1>Look For a Book to Read?</h1>
        <p>Search for a book on google books</p>

        <InputGroup
          style={{ width: "350px", margin: "2rem auto" }}
          className="mb-3"
        >
          <FormControl
            aria-describedby="search input"
            name="title"
            placeholder="Title (required)"
            onChange={handleInputChange}
          />
          <InputGroup.Append>
            <Button
              disabled={!formObject.title}
              onClick={handleFormSubmit}
              variant="outline-secondary"
            >
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Jumbotron>

      <div>
        <div className="text-center">
          <h1>Books Results</h1>
        </div>

        {books.length > 0 ? (
          <SearchResults books={books} />
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    </main>
  );
}

export default Books;
