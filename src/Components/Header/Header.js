import React from "react";

import logo from '../../assets/logo.png'
import {Navbar} from "react-bootstrap";

const header = (props) => {
    return (
        <Navbar bg="dark" variant="dark" expand={"lg"}>
            <Navbar.Brand>
                <img src={logo}
                     width="40"
                     height="40"
                     className="d-inline-block align-center"
                     alt="logo"/>
                Cool Moose
            </Navbar.Brand>
        </Navbar>
    )
}

export default header
