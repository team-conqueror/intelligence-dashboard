import React from "react";
import {Container, Nav} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const Navigationbar:React.FC = () => {
    return(
        <Container fluid={true} className="p-0 shadow-sm">
                <Nav className="justify-content-end pt-3 pb-3 shadow-sm bg-light m-0">
                    <Nav.Link href="#action1" className="me-4 text-dark">Home</Nav.Link>
                    <Nav.Link href="#action2" className={"me-4 text-dark"}>About</Nav.Link>
                    <Nav.Link href="#action2" className={"me-4 text-dark"}>Contact</Nav.Link>
                    <Nav.Link href="#action2" className={"me-4 text-dark"}>
                        <Icon.PersonCircle className="me-2" />
                        John Doe
                    </Nav.Link>
                </Nav>
        </Container>
    )
}

export default Navigationbar;