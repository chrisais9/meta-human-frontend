import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar bg="transparent">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="/expenses">Expenses</Nav.Link>
            <Nav.Link href="/invoices">Invoices</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Expenses />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Routes>
    </>
  );
}

export default App;
