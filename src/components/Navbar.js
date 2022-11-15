import React from "react";
import Brandlogo from "./Brandlogo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Login from "../pages/Login"

function Navs() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Brandlogo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Stack direction="horizontal" gap={3}>
            <Button variant="outline-danger" onClick={() => setModalShow(true)}>Login</Button>
            <Button variant="danger">Register</Button>
            <Login
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
          </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;