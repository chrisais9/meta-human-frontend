import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function MainNavbar() {
  return (
    <Navbar className="p-3 " collapseOnSelect expand="lg" bg="transparent" fixed="top">
      <Navbar.Brand href="/">META-HUMAN</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/mint">
            <Nav.Link>Buy</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/gallery">
            <Nav.Link>Gallery</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/roadmap">
            <Nav.Link>Roadmap</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/team">
            <Nav.Link>Team</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
