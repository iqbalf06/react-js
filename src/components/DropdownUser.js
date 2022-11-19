import Button from 'react-bootstrap/Button';
import { Popover, OverlayTrigger, Nav, Link } from 'react-bootstrap';
import Profile from '../components/images/profile.png'
import User from '../components/images/user.png'
import Logout from '../components/images/logout.png'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const popover = (
    <Popover id="popover-basic">
        <Popover.Body>
          <Nav.Link href="/Profile" style={{height:"2px"}}>
            <img src={User} style={{width:"20px", height:"20px", marginRight:"5px" }}/> Profile</Nav.Link>
            
        </Popover.Body>

        <Popover.Body>
      <hr></hr>
        <Nav.Link href="/" >
            <img src={Logout} style={{width:"19px", height:"19px", marginRight:"3px", marginLeft:"3px"}}/> Logout</Nav.Link>
        </Popover.Body>
    </Popover>
);

const DropdownUser = () => (
    <OverlayTrigger trigger="click" placement="bottom" overlay={
        <Popover id="popover-basic">
        <Popover.Body>
          <Nav.Link href="/Profile" style={{height:"2px"}}>
            <img src={User} style={{width:"20px", height:"20px", marginRight:"5px" }}/> Profile</Nav.Link>
            
        </Popover.Body>

        <Popover.Body>
      <hr></hr>
        <Nav.Link href="/" >
            <img src={Logout} style={{width:"19px", height:"19px", marginRight:"3px", marginLeft:"3px"}}/> Logout</Nav.Link>
        </Popover.Body>
    </Popover>
    }>
        <img style={{ width: "55px", height: "55px" }} src={Profile} alt="logo" />
    </OverlayTrigger>
);

export default DropdownUser