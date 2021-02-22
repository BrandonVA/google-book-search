// import { Button } from "bootstrap";
import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Markup } from "interweave";
import API from "../../utils/API";

const SearchResults = ({ books }) => {
  const saveBook = (book) => {
    const bookToSave = {
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors,
      description: book.volumeInfo.description
        ? book.volumeInfo.description
        : book.searchInfo.textSnippet,
      link: book.volumeInfo.infoLink,
      image: book.volumeInfo.imageLinks.thumbnail,
    };
    API.saveBook(bookToSave);
  };
  return (
    <Row className="m-3 p-3">
      {books.map((book) => (
        <Col xl={12} key={book.id}>
          <Row>
            <Col xl={8}>
              <h4>{book.volumeInfo.title}</h4>
              <h6>
                Written By:
                {book.volumeInfo.authors
                  ? book.volumeInfo.authors.map((name, i) => (
                      <strong key={i}>
                        {" "}
                        {`${name} ${
                          book.volumeInfo.authors.length > 1 &&
                          i + 1 !== book.volumeInfo.authors.length
                            ? ","
                            : ""
                        }`}{" "}
                      </strong>
                    ))
                  : "No Authors"}
              </h6>
            </Col>
            <Col xl={4}>
              {" "}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <a
                  href={book.volumeInfo.infoLink}
                  className="btn m-1"
                  style={{
                    background: "lightblue",
                    padding: "6px 16px",
                    color: "grey",
                  }}
                >
                  View
                </a>{" "}
                <Button
                  className="m-1 btn-success"
                  onClick={() => saveBook(book)}
                >
                  Save
                </Button>
              </div>
            </Col>
          </Row>

          <div>
            {book.volumeInfo.description ? (
              book.volumeInfo.description
            ) : (
              <Markup
                content={
                  book.searchInfo
                    ? book.searchInfo.textSnippet
                    : "No description"
                }
              />
            )}
          </div>
          <hr />
        </Col>
      ))}
    </Row>
  );
};

export default SearchResults;
