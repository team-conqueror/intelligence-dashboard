import React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons"

type IStudentType = {
    name: string,
    indexNumber: string,
    academicYear: string
}
const ExamResultRightArea:React.FC<IStudentType> = (props) => {
    return(
        <Container>
            <Row>
                <Col xs={12}>
                    <Button>See student progress</Button>
                </Col>
                <Col xs={12}>
                    <Card className="p-5 mt-2">
                        <Card.Title>Student Info</Card.Title>
                        <Card.Text>
                            <Row>
                                <Col xs={12}>
                                    <h1><Icon.PersonCircle/></h1>

                                </Col>
                                <Col xs={6}>
                                    Student Name with initials
                                </Col>
                                <Col xs={6}>
                                    : {props.name}
                                </Col>
                                <Col xs={6}>
                                    Student Full Name
                                </Col>
                                <Col xs={6}>
                                    : {props.name}
                                </Col>
                                <Col xs={6}>
                                    Index number
                                </Col>
                                <Col xs={6}>
                                    : {props.indexNumber}
                                </Col>
                                <Col xs={6}>
                                    Academic year
                                </Col>
                                <Col xs={6}>
                                    : {props.academicYear}
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ExamResultRightArea;