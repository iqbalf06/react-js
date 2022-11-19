import React from 'react'
import Brandlogo from "./Brandlogo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Login from "./Login"
import Register from "./Register"
import Profile from "../components/images/profile.png"
import Basket from "../components/images/Basket.png"
import DropdownUser from "../components/DropdownUser"

function NavUser() {
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
          <img style={{ width: "35px", height: "32px" }} src={Basket} alt="logo" />
        </Navbar.Brand>
        <Navbar.Brand href="#home">
          <DropdownUser />
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavUser