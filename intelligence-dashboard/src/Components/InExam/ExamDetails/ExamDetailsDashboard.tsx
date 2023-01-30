import React from "react";
import {Card, Col, Container, Nav, Row} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import Navigationbar from "../../Common/Navigationbar";
import {Avatar, Stack} from "@mui/material";
import {deepOrange, deepPurple, lightBlue, lightGreen, orange, red, yellow} from "@mui/material/colors";

const ExamDetailsDashboard:React.FC = () => {
    return (
        <Container className=" exam-details-dashboard" fluid={true}>
            <Row>
                <Navigationbar/>
            </Row>
            <Row className="h-5 navbar-vertical">
                <Col xs={3} className="bg-light shadow-sm">
                    <Nav defaultActiveKey="/home" className="flex-column m-5" >
                        <h4 className="text-start">Menu</h4>
                        <Nav.Link href="/home" className="text-start" >Active</Nav.Link>
                        <Nav.Link eventKey="link-1" className="text-start" >Link</Nav.Link>
                        <Nav.Link eventKey="link-2" className="text-start" >Link</Nav.Link>
                        <Nav.Link eventKey="link-2" className="text-start" >Link</Nav.Link>
                    </Nav>
                </Col>
                <Col xs={9} className="p-0">
                    <Row className="p-0 m-0">
                        <Col xs={12} className="p-0">
                            <Container className="bg-secondary p-3 m-0 text-light">
                                <h3>Search</h3>
                            </Container>
                        </Col>
                        <Col xs={12} className="pt-3">
                            <Card className="p-3">
                                <Row>
                                    <Col xs={6}>
                                        <Card.Title className="text-start">
                                            Exam: October 2021
                                        </Card.Title>
                                        <Card.Text className="text-start">
                                            course: SENG 11213 - Fundamentals of Computing<br/>
                                            50 MCQ based questions for all exam
                                        </Card.Text>
                                    </Col>
                                    <Col xs={6}>
                                        <Card.Text className="text-end text-sm">
                                            21 Oct 2021 9:00 AM - 12:00 PM
                                        </Card.Text>
                                        <Row className="justify-content-end">
                                            <Col xs={2}>
                                                <Card>
                                                    <Card.Text>3 Hrs</Card.Text>
                                                </Card>
                                            </Col>
                                            <Col xs={5}>
                                                <Card>
                                                    <Card.Text>50 MCQ Questions</Card.Text>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="pt-4">
                                    <Col xs={4}>
                                        <Card className="mt-2 p-3">
                                            <Card.Text>
                                                <Row>
                                                    <Col xs={3}>
                                                        <Avatar sx={{bgcolor: lightBlue[200]}} >
                                                            <Icon.Person className="text-primary"/>
                                                        </Avatar>
                                                    </Col>
                                                    <Col xs={9}>
                                                        <Row className="justify-content-start">
                                                            <Col xs={12} className="text-start">H</Col>
                                                            <Col xs={12} className="text-start">G</Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Card.Text>
                                        </Card>
                                    </Col>
                                    <Col xs={4}>
                                        <Card className="mt-2 p-3">
                                            <Card.Text>

                                                <Row>
                                                    <Col xs={3}>
                                                        <Avatar sx={{bgcolor: lightGreen[200]}} >
                                                            <Icon.Star className="text-success"/>
                                                        </Avatar>
                                                    </Col>
                                                    <Col xs={9}>
                                                        <Row className="justify-content-start">
                                                            <Col xs={12} className="text-start">H</Col>
                                                            <Col xs={12} className="text-start">G</Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Card.Text>
                                        </Card>
                                    </Col>
                                    <Col xs={4}>
                                        <Card className="mt-2 p-3">
                                            <Card.Text>
                                                <Card.Text>
                                                    <Row>
                                                        <Col xs={3}>
                                                            <Avatar sx={{bgcolor: orange[200]}} >
                                                                <Icon.CheckCircle className="text-danger"/>
                                                            </Avatar>
                                                        </Col>
                                                        <Col xs={9}>
                                                            <Row className="justify-content-start">
                                                                <Col xs={12} className="text-start">H</Col>
                                                                <Col xs={12} className="text-start">G</Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                </Card.Text>
                                            </Card.Text>
                                        </Card>
                                    </Col>
                                    <Col xs={4}>
                                        <Card className="mt-2 p-3">
                                            <Card.Text>
                                                <Card.Text>

                                                    <Row>
                                                        <Col xs={3}>
                                                            <Avatar sx={{bgcolor: deepPurple[200]}} >
                                                                <Icon.CheckCircle className="text-primary"/>
                                                            </Avatar>
                                                        </Col>
                                                        <Col xs={9}>
                                                            <Row className="justify-content-start">
                                                                <Col xs={12} className="text-start">H</Col>
                                                                <Col xs={12} className="text-start">G</Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                </Card.Text>
                                            </Card.Text>
                                        </Card>
                                    </Col>
                                    <Col xs={4}>
                                        <Card className="mt-2 p-3">
                                            <Card.Text>
                                                <Card.Text>

                                                    <Row>
                                                        <Col xs={3}>
                                                            <Avatar sx={{bgcolor: yellow[200]}} >
                                                                <Icon.Flag className="text-warning"/>
                                                            </Avatar>
                                                        </Col>
                                                        <Col xs={9}>
                                                            <Row className="justify-content-start">
                                                                <Col xs={12} className="text-start">H</Col>
                                                                <Col xs={12} className="text-start">G</Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                </Card.Text>
                                            </Card.Text>
                                        </Card>
                                    </Col>
                                    <Col xs={4}>
                                        <Card className="mt-2 p-3">
                                            <Card.Text>
                                                <Card.Text className="text-danger">

                                                    <Row>
                                                        <Col xs={3}>
                                                            <Avatar sx={{bgcolor: red[200]}} >
                                                                <Icon.XCircle className="text-danger"/>
                                                            </Avatar>
                                                        </Col>
                                                        <Col xs={9}>
                                                            <Row className="justify-content-start">
                                                                <Col xs={12} className="text-start">H</Col>
                                                                <Col xs={12} className="text-start">G</Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                </Card.Text>
                                            </Card.Text>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default ExamDetailsDashboard;