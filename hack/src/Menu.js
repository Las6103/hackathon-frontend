import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Menu() {
  return (
    <Navbar sticky="top" bg="primary" variant="dark">
      <Navbar.Brand href="/">Corona Information</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Articles</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Menu;