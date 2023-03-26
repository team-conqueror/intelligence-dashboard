import React, {useEffect, useState} from "react";
import axios from "axios";
import Navigationbar from "../Common/Navigationbar";
import SearchArea from "../SearchArea/SearchArea";
import {Button, Col, Container, Row} from "react-bootstrap";
import ExamResultLeftArea from "./ExamResultLeftArea";
import ExamMiddleArea from "./ExamMiddleArea";
import ExamResultRightArea from "./ExamResultRightArea";

const ExamResultComponent:React.FC = () => {

    const [students, setStudents] = useState<any[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8080/getStudents")
            .then((response) => {
                setStudents(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const renderStudentName = () => {
        return students[0].name;
    }
    const renderStudentIndex = () => {
        return students[0].studentNumber;
    }
    const renderStudentYear = () => {
        return students[0].academicYear;
    }

    return(
        <Container fluid={true} className="bg-light-grey">
            <Navigationbar/>
            <hr className="m-0 p-0"/>
            <Row>
                <Col xs={12} className="pt-4 pb-4 mb-5 bg-light">
                    <SearchArea/>
                </Col>
            </Row>
            <Row>
                <Col xs={3}>
                    <ExamResultLeftArea/>
                    <Row className="justify-content-center">
                        <Col xs={6}>
                            <Button>Blog</Button>
                        </Col>
                    </Row>
                </Col>
                <Col xs={6}>
                    <ExamMiddleArea/>
                </Col>
                <Col xs={3}>
                    <ExamResultRightArea academicYear={renderStudentYear()}
                                         indexNumber={renderStudentIndex()}
                                         name={renderStudentName()}/>
                </Col>
            </Row>
        </Container>
    )
}

export default ExamResultComponent;