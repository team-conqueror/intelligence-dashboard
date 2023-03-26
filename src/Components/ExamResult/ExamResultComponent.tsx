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
    const [studentName, setStudentName] = useState<string>("");
    const [indexNumber, setIndexNumber] = useState<string>("");
    const [academicYear, setAcademicYear] = useState<string>("");

    const sampleId = "641fffd41efe8e63554cd44a";

    useEffect(() => {
        axios.get("http://localhost:8080/getStudent/" + sampleId)
            .then((response) => {
                setStudents(response.data);
                setStudentName(response.data.name);
                setIndexNumber(response.data.studentNumber);
                setAcademicYear(response.data.academicYear);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const renderStudentName = () => {
        return studentName;
    }
    const renderStudentIndex = () => {
        return indexNumber;
    }
    const renderStudentYear = () => {
        return academicYear;
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