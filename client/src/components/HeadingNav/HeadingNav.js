import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const HeadingNav = () => {
  return (
    <Nav defaultActiveKey="/" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/">Google Books</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">
          <Link to="/">Search</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">
          <Link to="/saved">Saved</Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default HeadingNav;
