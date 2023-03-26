import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import {IResult} from "../../Types/SingleResultType";

type IResultType = {
    courseCode : string
    subjectName: string
    year: string
    grade: string
}

const ExamResultSingle:React.FC<IResultType> = (props) => {
    return(
        <Card className="mt-4 p-3">
            <Row className="justify-content-center text-secondary">
                <Col xs={2}>{props.courseCode}</Col>
                <Col xs={5}>{props.subjectName}</Col>
                <Col xs={3}>{props.year}</Col>
                <Col xs={2}>{props.grade}</Col>
            </Row>
        </Card>
    )
}

export default ExamResultSingle;