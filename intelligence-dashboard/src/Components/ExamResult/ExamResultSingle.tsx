import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import {IResult} from "../../Types/SingleResultType";

type IResultType = {
    result: IResult
}

const ExamResultSingle:React.FC<IResultType> = (props) => {
    return(
        <Card className="mt-4 p-3">
            <Row className="justify-content-center text-secondary">
                <Col xs={2}>{props.result.courseCode}</Col>
                <Col xs={5}>{props.result.subjectName}</Col>
                <Col xs={3}>{props.result.year}</Col>
                <Col xs={2}>{props.result.grade}</Col>
            </Row>
        </Card>
    )
}

export default ExamResultSingle;