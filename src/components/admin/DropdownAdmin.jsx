import Button from "react-bootstrap/Button";
import { Popover, OverlayTrigger, Nav, Navbar, Link } from "react-bootstrap";
import Profile from "../images/profile.png";
import React, { useState, useRef } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProducticon from "../images/addproducticon.png";
import AddTopingicon from "../images/addtopingicon.png";
import logout from '../images/logout.png'


const popover = (
  <Popover id="popover-basic">
    <Popover.Body>
      <Nav.Link href="/addproduct">
        <img
          src={AddProducticon}
          style={{ width: "15px", height: "19px",marginLeft:"2px", marginRight: "5px" }}
        />{" "}
        Add Product
      </Nav.Link>
    </Popover.Body>
    <Popover.Body>
      <Nav.Link href="/addtoping">
        <img
          src={AddTopingicon}
          style={{
            width: "19px",
            height: "19px",
            marginRight: "3px",
            marginLeft: "1px",
          }}
        />{" "}
        Add Toping
      </Nav.Link>
      <hr></hr>
    </Popover.Body>
    <Popover.Body>
      <Nav.Link href="/" style={{marginTop:"-30px"}}>
        <img
          src={logout}
          style={{
            width: "19px",
            height: "19px",
            marginRight: "3px",
            marginLeft: "5px",
          }}
        />{" "}
        Logout
      </Nav.Link>
    </Popover.Body>
  </Popover>
);

const DropdownAdmin = () => (
  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
    <img style={{ width: "55px", height: "55px" }} src={Profile} alt="logo" />
  </OverlayTrigger>
);

export default DropdownAdmin;
