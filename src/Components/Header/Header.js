import React from "react";

import logo from '../../assets/logo.png'
import {Navbar, Nav} from "react-bootstrap";

const header = (props) => {
    return (
        <Navbar bg="dark" variant="dark" expand={"lg"}>
            <Navbar.Brand>
                <img src={logo}
                     width="50"
                     height="50"
                     className="d-inline-block align-center"
                     alt="logo"/>
                Cool Moose
            </Navbar.Brand>
            {/*<Navbar.Toggle aria-controls="basic-navbar-nav" />*/}
            {/*<Navbar.Collapse id="basic-navbar-nav">*/}
            {/*    <Nav className="mr-auto d-block d-lg-none d-xl-none">*/}
            {/*        <Nav.Link href="#home">Home</Nav.Link>*/}
            {/*        <Nav.Link href="#link">Link</Nav.Link>*/}
            {/*    </Nav>*/}
            {/*</Navbar.Collapse>*/}
        </Navbar>
    )
}

export default header
