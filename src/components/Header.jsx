import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink,Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">SPA</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" style={{ marginLeft: 35, color: "#fff" }}>
              Home
            </NavLink>
            <NavLink to="/courses" style={{ marginLeft: 35, color: "#fff" }}>
              Courses
            </NavLink>
            <NavLink to="/about" style={{ marginLeft: 35, color: "#fff" }}>
              About
            </NavLink>
            <NavLink to="/login" style={{ marginLeft: 35, color: "#fff" }}
            className={(link)=>console.log(link)}
            >
              Login
            </NavLink>
            <NavLink to="/signup" style={{ marginLeft: 35, color: "#fff" }}>
              Signup
            </NavLink>
            <NavLink to="/dashboard" style={{ marginLeft: 35, color: "#fff" }}>
              Dashboard
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
