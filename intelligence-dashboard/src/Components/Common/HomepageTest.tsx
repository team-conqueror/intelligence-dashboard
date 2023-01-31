import React from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const HomepageTest:React.FC = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        <Nav.Link href="#link">Results</Nav.Link>
                        <Nav.Link href="/exampaper">Paper</Nav.Link>
                        <Nav.Link href="examdetails">Exam Details</Nav.Link>
                        <Nav.Link href="#link">Add Exam</Nav.Link>
                        <NavDropdown title="Exam Dashboard" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/studentdashboard">Student</NavDropdown.Item>
                            <NavDropdown.Item href="/teacherdashboard">
                                Teacher
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HomepageTest;