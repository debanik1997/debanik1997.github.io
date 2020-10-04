import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.css"

import { Navbar, Nav, NavDropdown } from "react-bootstrap"

const TopNavbar = () => {
  return (
    <Navbar expand="lg" className="topNav">
      <Navbar.Brand
        href="/"
        style={{ fontSize: 25, fontWeight: "bold", fontStyle: "italic" }}
      >
        dp
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/coffee">Map O' Joe</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default TopNavbar
