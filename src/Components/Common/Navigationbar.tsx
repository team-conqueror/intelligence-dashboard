import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const Navigationbar:React.FC = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Container fluid={true}>
                <Navbar.Brand href="#home">
                    <Container className="text-purple">
                        <Icon.CircleFill/>{" "}
                        THE SCRUTINIZER</Container>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#exampaper">About</Nav.Link>
                        <Nav.Link href="#examdetails">Contact</Nav.Link>
                        <Nav.Link href="#link">
                            <Icon.PersonCircle className="fs-5"/>{" "}
                            John Doe
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigationbar;