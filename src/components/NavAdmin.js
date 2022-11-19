import React from 'react'
import Brandlogo from "./Brandlogo.png";
import { Container, Nav, NavLink, Navbar, Buttton, Stack, OverlayTrigger, Popover, NavbarBrand } from "react-bootstrap";
import Login from "./Login"
import Register from "./Register"
import Profile from "../components/images/profile.png"
import DropdownAdmin from "./admin/DropdownAdmin"

function NavAdmin() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img style={{ width: "70px", height: "70px" }} src={Brandlogo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home">
          <DropdownAdmin />
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavAdmin