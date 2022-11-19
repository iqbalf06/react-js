import React, { useState } from "react";
import { Nav, OverlayTrigger, Popover } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Stack from "react-bootstrap/Stack";
import logout from "../components/images/logout.png";
import Profile from "../components/images/profile.png";
import User from "../components/images/user.png";
import Brandlogo from "./Brandlogo.png";
import Login from "./Login";
import Register from "./Register";

function Navs() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const DataUser = JSON.parse(localStorage.getItem("VALUE_LOGIN"));

  const Logout = () => {
    localStorage.removeItem("VALUE_LOGIN");
    window.location.reload();
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            style={{ width: "70px", height: "70px" }}
            src={Brandlogo}
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Stack direction="horizontal" gap={3}>
            {DataUser === null ? (
              <>
                <Button
                  variant="outline-danger"
                  onClick={() => setShowLogin(true)}
                >
                  Login
                </Button>
                <Login
                  show={showLogin}
                  onHide={() => {
                    setShowLogin(false);
                  }}
                  setShowLogin={setShowLogin}
                  setShowRegister={setShowRegister}
                />
                <Button variant="danger" style={{backgroundColor:"#BD0707"}} onClick={() => setShowRegister(true)}>
                  Register
                </Button>
                <Register
                  show={showRegister}
                  onHide={() => {
                    setShowRegister(false);
                  }}
                  setShowRegister={setShowRegister}
                  setShowLogin={setShowLogin}
                />
              </>
            ) : (
              <>
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={
                    <Popover id="popover-basic" style={{ height: "130px" }}>
                      <Popover.Body>
                        <Nav.Link href="/Profile" style={{ height: "2px" }}>
                          <img
                            src={User}
                            style={{
                              width: "20px",
                              height: "20px",
                              marginRight: "5px",
                            }}
                          />
                          Profile
                        </Nav.Link>
                      </Popover.Body>

                      <Popover.Body>
                        <hr></hr>
                        <Nav.Link className="pb-2" onClick={Logout}>
                          <img
                            src={logout}
                            style={{
                              width: "19px",
                              height: "19px",
                              marginRight: "3px",
                              marginLeft: "3px",
                            }}
                          />
                          Logout
                        </Nav.Link>
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <img
                    style={{ width: "55px", height: "55px", cursor: "pointer" }}
                    src={Profile}
                    alt="userPhoto"
                  />
                </OverlayTrigger>
              </>
            )}
          </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
