import React from "react";
import {Col, Container, Row, Button, Card} from "react-bootstrap";
import ExamButton from "./ExamButton";
import * as Icon from "react-bootstrap-icons";
import Navigationbar from "../../Common/Navigationbar";

const ExamDashboard:React.FC = () => {
    return(
        <Container className="examDashboard" fluid={true}>
            <Navigationbar/>
            <Row className="justify-content-center">
                <Col s={12} md={8}>
                    <h2 className="p-3 text-start">All Exams</h2>
                    <Row className="justify-content-start">
                        <Col xs={2} className="align-content-start p-0 m-0">
                            <Button variant="light m-3">
                                <Icon.PlusCircle/>
                                {" "}Add Exam
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}> <ExamButton/> </Col>
                        <Col xs={4}> <ExamButton/> </Col>
                        <Col xs={4}> <ExamButton/> </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col>
                            <Button variant="outline-primary mt-5">View more...</Button>
                        </Col>
                    </Row>
                    <hr/>
                    <Row className="pt-3">
                        <Col xs={4}>
                            <Card className="pt-4 pb-4 ps-3">
                                <Card.Title className="text-start">Explore previous exams</Card.Title>
                                <br/><br/><br/>
                                <Row>
                                    <Col xs={2}>
                                        <Button variant="light">
                                            <Icon.PeopleFill/>
                                        </Button>
                                    </Col>
                                    <Col xs={2}>
                                        <Button variant="light">
                                            <Icon.ArrowCounterclockwise />
                                        </Button>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col xs={8}>
                            <Card className="pt-4">
                                <Row>
                                    <Col xs={7}>
                                        <Card.Title>
                                            Use more applications provided by The Scrutinizer
                                        </Card.Title>
                                        <Card.Body className="text-start">
                                            Apps in the scrutinizer is helping users to make ease their own works.
                                            we are providing more apps with this scrutinizer.
                                            <br/>
                                            <br/>
                                            <Container className="text-decoration-underline text-start m-0 p-0">
                                                Learn more
                                            </Container>
                                        </Card.Body>
                                    </Col>
                                    <Col xs={5} className="mt-4">
                                        <Row className="align-middle justify-content-center">
                                            <Col xs={3}>
                                                <Button variant="outline-dark">
                                                    <Icon.PcDisplay/>
                                                </Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Button variant="outline-dark">
                                                    <Icon.Laptop/>
                                                </Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Button variant="outline-dark">
                                                    <Icon.Phone/>
                                                </Button>
                                            </Col>
                                        </Row>
                                        <Row className="align-middle justify-content-center pt-3">
                                            <Col xs={3}>
                                                <Button variant="outline-dark">
                                                    <Icon.ChatLeftDots/>
                                                </Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Button variant="outline-dark">
                                                    <Icon.FileCheck/>
                                                </Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Button variant="outline-dark">
                                                    <Icon.GearFill/>
                                                </Button>
                                            </Col>
                                        </Row>
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

export default ExamDashboard;