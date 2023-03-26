import React, {useEffect, useState} from "react";
import axios from "axios";
import {Col, Container, Row} from "react-bootstrap";
import {IResult} from "../../Types/SingleResultType";
import ExamResultSingle from "./ExamResultSingle";


const sampleResultSheet : IResult[] = [
    {
        courseCode: "SENG 11232",
        subjectName: "Software Process",
        year: "2017/2018",
        grade: "A+"
    },
    {
        courseCode: "SENG 11232",
        subjectName: "Software Process",
        year: "2017/2018",
        grade: "A+"
    },{
        courseCode: "SENG 11232",
        subjectName: "Software Process",
        year: "2017/2018",
        grade: "A+"
    },
    {
        courseCode: "SENG 11232",
        subjectName: "Software Process",
        year: "2017/2018",
        grade: "A+"
    },
    {
        courseCode: "SENG 11232",
        subjectName: "Software Process",
        year: "2017/2018",
        grade: "A+"
    },
    {
        courseCode: "SENG 11232",
        subjectName: "Software Process",
        year: "2017/2018",
        grade: "A+"
    },
    {
        courseCode: "SENG 11232",
        subjectName: "Software Process",
        year: "2017/2018",
        grade: "A+"
    },
    {
        courseCode: "SENG 11232",
        subjectName: "Software Process",
        year: "2017/2018",
        grade: "A+"
    },
    {
        courseCode: "SENG 11232",
        subjectName: "Software Process",
        year: "2017/2018",
        grade: "A+"
    },
    {
        courseCode: "SENG 11232",
        subjectName: "Software Process",
        year: "2017/2018",
        grade: "A+"
    },
    {
        courseCode: "SENG 11232",
        subjectName: "Software Process",
        year: "2017/2018",
        grade: "A+"
    },
    {
        courseCode: "SENG 11232",
        subjectName: "Software Process",
        year: "2017/2018",
        grade: "A+"
    },
    {
        courseCode: "SENG 11232",
        subjectName: "Software Process",
        year: "2017/2018",
        grade: "A+"
    }

]

type studentDetails = {
    id: string
}

const ExamMiddleArea:React.FC<studentDetails> = (props) => {

    const [subjects, setSubjects] = useState<any>([{}]);

    useEffect(() => {
        axios.get("http://localhost:8080/getStudent/" + props.id)
            .then((response) => {
                setSubjects(response.data);
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            })
    }, [])


    const renderResults = () => {
        return sampleResultSheet.map((singleResult) => {
            return <ExamResultSingle result={singleResult}/>;
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