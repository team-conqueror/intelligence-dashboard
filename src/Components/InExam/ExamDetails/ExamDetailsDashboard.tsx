import React from "react";
import {Alert, Button, Card, Col, Container, Nav, Row} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import Navigationbar from "../../Common/Navigationbar";
import {Avatar} from "@mui/material";
import {deepPurple, lightBlue, lightGreen, orange, red, yellow} from "@mui/material/colors";
import {ExamStudentsSample} from "../../../Repository/ExamQuestions/ExamStudentsSample";
import SingleStudentDetail from "./SingleStudentDetail";
import SearchArea from "../../SearchArea/SearchArea";
import ExamDashboardItem from "./ExamDashboardItem";
import {eExamDetailsIcons} from "../../../Types/ExamDetailsDashboardType";

const ExamDetailsDashboard:React.FC = () => {

    const renderStudents = () =>{
        return ExamStudentsSample.map(student => {
            return <SingleStudentDetail
                name={student.name}
                examStatus={student.examStatus}
                score={student.score}
                grade={student.grade}
                timeSpent={student.timeSpent}
                submittedTime={student.submittedTime}
                details={student.details}/>
        })
    }

    return (
        <Container className=" exam-details-dashboard" fluid={true}>
            <Row>
                <Navigationbar/>
            </Row>
            <hr className="p-0 m-0"/>
            <Row className="h-5 navbar-vertical">
                <Col xs={3} className="bg-light shadow-sm">
                    <Nav defaultActiveKey="/home" className="flex-column m-5" >
                        <h4 className="text-start">Menu</h4>
                        <Nav.Link href="/examdetails" className="text-start text-dark" >Courses</Nav.Link>
                        <Nav.Link eventKey="/examdetails" className="text-start text-dark" >Course Subscription</Nav.Link>
                        <Nav.Link eventKey="/examdetails" className="text-start text-dark" >Students</Nav.Link>
                        <Nav.Link eventKey="/examdetails" className="text-start text-dark" >Private Groups</Nav.Link>
                        <Nav.Link eventKey="/examdetails" className="text-start text-dark" >Settings</Nav.Link>
                    </Nav>
                </Col>
                <Col xs={9} className="p-0">
                    <Row className="p-0 m-0">
                        <Col xs={12} className="">
                            <Container className="p-4 mt-1 bg-light text-light">
                                <SearchArea/>
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
                                                            <Col xs={12} className="text-start">total students</Col>
                                                            <Col xs={12} className="text-start">48</Col>
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
                                                            <Col xs={12} className="text-start">Average Score</Col>
                                                            <Col xs={12} className="text-start">76</Col>
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
                                                                <Col xs={12} className="text-start">Total Absent Students</Col>
                                                                <Col xs={12} className="text-start">1</Col>
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
                                                                <Col xs={12} className="text-start">
                                                                    Total Finished Students
                                                                </Col>
                                                                <Col xs={12} className="text-start">15</Col>
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
                                                                <Col xs={12} className="text-start">
                                                                    Total Passed Students
                                                                </Col>
                                                                <Col xs={12} className="text-start">12</Col>
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
                                                                <Col xs={12} className="text-start">
                                                                    Total Failed Students
                                                                </Col>
                                                                <Col xs={12} className="text-start">3</Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                </Card.Text>
                                            </Card.Text>
                                        </Card>
                                    </Col>
                                </Row>

                            </Card>
                            <Alert className="mt-4" variant="warning" >

                                <Row>
                                    <Col xs={6} className="text-start">
                                        <Icon.QuestionCircle className="text-warning" />{'  '}
                                        exam results are not submitted yet
                                    </Col>
                                    <Col xs={6} className="text-end">
                                        <Button variant="outline-primary bg-light" className="me-3" >
                                            Publish without feedback
                                        </Button>
                                        <Button variant="outline-primary bg-light" className="me-3">
                                            Publish with feedback
                                        </Button>
                                    </Col>
                                </Row>
                                                            </Alert>
                            <Row className="pt-3 pb-2">
                                <Col xs={2}>Student Name</Col>
                                <Col xs={1}>Passed/failed</Col>
                                <Col xs={1}>Score</Col>
                                <Col xs={1}>Grade</Col>
                                <Col xs={2}>Time Spent</Col>
                                <Col xs={2}>Submitted Time</Col>
                                <Col xs={2}>Details</Col>
                            </Row>
                            <Row>{renderStudents()}</Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default ExamDetailsDashboard;