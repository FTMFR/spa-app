import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">SPA</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" style={{ marginLeft: 35, color: "#fff" }}>
              Home
            </Link>
            <Link to="/courses" style={{ marginLeft: 35, color: "#fff" }}>
              Courses
            </Link>
            <Link to="/about" style={{ marginLeft: 35, color: "#fff" }}>
              About
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
