import React, {useEffect, useState} from "react";
import axios from "axios";
import Navigationbar from "../Common/Navigationbar";
import SearchArea from "../SearchArea/SearchArea";
import {Button, Col, Container, Row} from "react-bootstrap";
import ExamResultLeftArea from "./ExamResultLeftArea";
import ExamMiddleArea from "./ExamMiddleArea";
import ExamResultRightArea from "./ExamResultRightArea";
import {SAMPLE_DATA} from "../../Repository/constants";
import {useLocation} from "react-router-dom";
import LoadingScreen from "../Loader/LoadingScreen";

const ExamResultComponent:React.FC = () => {

    const location = useLocation();
    //let studentIdFromLoc = location.state? location.state.studentId : SAMPLE_DATA.STUDENT_ID;
    const [studentIdFromLoc, setStudentIdFromLoc] = useState<string>("");

    const cookies = document.cookie;
    const cookiesArray = cookies.split('; ');

    let token = null;
    cookiesArray.forEach(cookie => {
        const [name, value] = cookie.split('=');
        if (name === 'token') {
            token = value;
        }
    });

    fetch(`http://3.84.20.224:5000/userDtl`,
        {
            method: 'POST',
            body: JSON.stringify({token}),
            headers: {'Content-Type': 'application/json'}
        })
        .then(async (response) => {
            const rs = await response.json()
            //console.log(rs.user.user.name);
            setStudentIdFromLoc(rs.user.user.name);
            //studentIdFromLoc = rs.user.user.name;
        })
        .catch((error) => {
            //console.log("Error" + error);
            setStudentIdFromLoc(SAMPLE_DATA.STUDENT_ID);
            //studentIdFromLoc = SAMPLE_DATA.STUDENT_ID;
        })


    const [loading, setLoading] = useState<boolean>(true);

    const [students, setStudents] = useState<any[]>([]);
    const [studentName, setStudentName] = useState<string>("");
    const [indexNumber, setIndexNumber] = useState<string>("");
    const [academicYear, setAcademicYear] = useState<string>("");
    const [studentId, setStudentId] = useState<string>("");


    useEffect(() => {

        const tempStdName = studentIdFromLoc == ""? SAMPLE_DATA.STUDENT_ID: studentIdFromLoc;
        console.log(tempStdName);
        axios.get("http://localhost:8080/getStudentsRr/" + tempStdName)
            .then((response) => {
                console.log(response.data);
                setStudents(response.data);
                setStudentName(response.data[0]?.name);
                setIndexNumber(response.data[0]?.studentNumber);
                setAcademicYear(response.data[0]?.academicYear);
                setStudentId(response.data[0]?._id);

                setTimeout(()=>{
                    setLoading(false);
                }, 2000)
            })
            .catch((error) => {
                //console.log(error);
                setLoading(false);
            })
    }, [studentIdFromLoc]);
    console.log(studentName);
    const renderStudentName = () => {
        return studentName;
    }
    const renderStudentIndex = () => {
        return indexNumber;
    }
    const renderStudentYear = () => {
        return academicYear;
    }
    const renderStudentID = () => {
        return studentIdFromLoc;
    }

    const renderView = () => {
        if(loading){
            return <LoadingScreen/>
        }else{
            return <Container fluid={true} className="bg-light-grey">
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
                        <ExamMiddleArea id={studentName}/>
                    </Col>
                    <Col xs={3}>
                        <ExamResultRightArea academicYear={renderStudentYear()}
                                             indexNumber={renderStudentIndex()}
                                             name={renderStudentName()}/>
                    </Col>
                </Row>
            </Container>
        }
    }

    return(
        renderView()
    )
}

export default ExamResultComponent;