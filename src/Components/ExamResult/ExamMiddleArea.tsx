import React, {useEffect, useState} from "react";
import axios from "axios";
import {Col, Container, Row} from "react-bootstrap";
import {IResult} from "../../Types/SingleResultType";
import ExamResultSingle from "./ExamResultSingle";



type studentDetails = {
    id: string
}

const ExamMiddleArea:React.FC<studentDetails> = (props) => {

    const [subjects, setSubjects] = useState<IResult[]>([]);

    useEffect(() => {
        axios.get("http://44.203.182.193:8080/getStudent/" + props.id.toString())
            .then((response) => {
                setSubjects(response.data.subjectsEnrolled);
            })
            .catch((err) => {
                console.error(err);
            })
    }, [])


    /*const renderResults = () => {
        return sampleResultSheet.map((singleResult) => {
            return <ExamResultSingle result={singleResult}/>;
        })
    }*/
    const renderResults = () => {
        return subjects.map((singleResult) => {
            return <ExamResultSingle
                courseCode={singleResult.courseCode}
                subjectName={singleResult.subName}
                year={singleResult.status}
                grade={singleResult.marks}/>;
        })
    }
    return(
        <Container >
            <Row className="justify-content-center">
                <Col xs={2}>
                    Course Code
                </Col>
                <Col xs={5}>
                    Subject Name
                </Col>
                <Col xs={3}>
                    Registration year
                </Col>
                <Col xs={2}>
                    Grade
                </Col>

            </Row>
            {renderResults()}
        </Container>
    )
}

export default ExamMiddleArea;