import React from 'react';
import "./Header.css";
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
// import logo from "./images/stamp.svg";

const popover = (
    <Popover id="popover-positioned-left">
        <strong>Instructions!</strong><br />
        Click on a character to earn points, but don't select a character more than once!
    </Popover>
);

const Header = props => (
    <header className="header row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6 text-center">
        <OverlayTrigger trigger="click" placement="left" overlay={popover}>
                <Button className="logo-button btn-dark">
                <img src="./images/shipengine5.png" className="App-logo" alt="logo" width="auto" height="auto" length="auto" />
                </Button>
                </OverlayTrigger>
                <br />
                <br />
                <h1><strong>Welcome!</strong><br />
        Work on validating a US-based address here! Enter an address, and the app will tell if you it is valid or not!</h1>
        </div>
        <div className="col-lg-3"></div>
    </header>
)

export default Header;