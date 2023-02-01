import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import {examStudentDetailsType} from "../../../Types/ExamStudentDetailsType";
import * as Icon from "react-bootstrap-icons";
import {eExamStatus} from "../../../Types/ExamStudentDetailsType";

const SingleStudentDetail:React.FC<examStudentDetailsType> = (props) => {

    const renderStatus = () => {
            if(props.examStatus === eExamStatus.passed){
                return <p className="text-success">{props.examStatus}</p>;
            }else if(props.examStatus == eExamStatus.absent){
                return <p className="text-warning">{props.examStatus}</p>
            }else{
                return <p className="text-danger">{props.examStatus}</p>;
            }
    }
    const renderGrade = () => {
        if(props.examStatus === eExamStatus.passed){
            return <p className="text-success">{props.grade}</p>;
        }else if(props.examStatus == eExamStatus.absent){
            return <p className="text-warning">{props.grade}</p>
        }else{
            return <p className="text-danger">{props.grade}</p>;
        }
    }

    return(
        <Col xs={12}>
            <Card className="pt-3 pb-2 ps-3 pe-3 mt-2">
                <Row>
                    <Col xs={2}>
                        <Icon.PersonCircle/>{" "}
                        {props.name}
                    </Col>
                    <Col xs={1}>{renderStatus()}</Col>
                    <Col xs={1}>{props.score}</Col>
                    <Col xs={1}>{renderGrade()}</Col>
                    <Col xs={2}>{props.timeSpent}</Col>
                    <Col xs={2}>{props.submittedTime}</Col>
                    <Col xs={2}>Dee Details</Col>
                </Row>
            </Card>
        </Col>
    )
}

export default SingleStudentDetail;