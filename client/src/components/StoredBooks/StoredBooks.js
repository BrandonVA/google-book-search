import React from "react";
import { Row, Col, Button, Image } from "react-bootstrap";
import { Markup } from "interweave";

const StoredBooks = ({ books, deleteBook }) => {
  return (
    <Row className="m-3 p-3">
      {books.map((book) => (
        <Col xl={12} key={book.id}>
          <Row>
            <Col xl={8}>
              <h4>{book.title}</h4>
              <h6>
                Written By:
                {book.author
                  ? book.author.map((name, i) => (
                      <strong key={i}>
                        {" "}
                        {`${name} ${
                          book.author.length > 1 && i + 1 !== book.author.length
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
                <Button className="m-1" href={book.link}>
                  View
                </Button>

                <Button className="m-1" onClick={() => deleteBook(book._id)}>
                  X
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              md={2}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image className="image-fluid" src={book.image} thumbnail />
            </Col>
            <Col md={10}>
              <Markup content={book.description} />
            </Col>
          </Row>

          <hr />
        </Col>
      ))}
    </Row>
  );
};

export default StoredBooks;
