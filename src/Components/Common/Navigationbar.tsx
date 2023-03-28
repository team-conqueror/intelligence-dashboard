import React, {useState} from "react";
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const Navigationbar:React.FC = () => {

    const token = window.localStorage.getItem("token");
    const [name,setName] = useState<string|null>(null);
    const handleOnNameChange = (name:string) =>{
        setName(name);
    }
    let val1 = true;
    let val2 = false;
    if(token){
        val1 = false;
        val2 = true;
        fetch("http://3.84.20.224:5000/userDtl",{
            method :"POST",
            //crossDomain ,
            headers : {
                "Content-Type":"application/json",
                Accept : "application/json",
                "Access-Control-Allow-Origin":"*"
            },
            body:JSON.stringify({
                token:window.localStorage.getItem("token")

            })
        })
            .then((res)=>res.json())
            .then((data)=>(
                handleOnNameChange(data.user.user.name)
            ));
    }


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
                        <Nav.Link href="/Login" hidden={val2}>Login</Nav.Link>

                        <Nav.Link href="/Profile" hidden={val1}>
                            <Icon.PersonCircle className=" fs-5"/>{" "}
                            {(name)}
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigationbar;