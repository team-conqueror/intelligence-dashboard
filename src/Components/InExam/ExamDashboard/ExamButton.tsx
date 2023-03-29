import React, {FC, useEffect, useState} from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import {Avatar, Stack} from "@mui/material";
import * as Icon from "react-bootstrap-icons";
import {useNavigate} from "react-router-dom";
import {SAMPLE_DATA} from "../../../Repository/constants";
import axios from "axios";

type examButtonType = {
    courseCode: string
    examDate: string
    teacherName: string
    timeRemaining: string
    buttonPress: () => void
}

const ExamButton:FC<examButtonType> = (props) => {
    const navigate = useNavigate();

    const [studentIdFromLoc, setStudentIdFromLoc] = useState<string>(SAMPLE_DATA.STUDENT_ID);
    useEffect(()=>{
        console.log(studentIdFromLoc);
    },[studentIdFromLoc])

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
            console.log(rs.user.user.name);
            setStudentIdFromLoc(rs.use.user.name);
        })
        .catch((error) => {
            console.log(" cannot get cookies"+error);
            setStudentIdFromLoc(SAMPLE_DATA.STUDENT_ID);
        })

    console.log(studentIdFromLoc);



    //get id from token
    const handleClick = () => {
        console.log('Button click ' + props.courseCode);
        axios.get("http://localhost:8080/getStudentsRr/" + studentIdFromLoc)
            .then((response) => {
                console.log(response.data[0]?._id);
                navigate('/exampaper', { state: {
                        courseCodec: props.courseCode,
                        studentId: response.data[0]?._id
                    } });
            })
            .catch((err)=>{
                console.log(err);
                navigate('/exampaper', { state: {
                        courseCodec: props.courseCode,
                        studentId: SAMPLE_DATA.STUDENT_ID
                    } });
            })

    }

    return(
        <Card className="pt-4 pe-5 ps-5 pb-4">
            <Card.Title className="me-auto" >{props.courseCode}</Card.Title>
            <Card.Text className="me-auto mb-0" >{props.examDate}</Card.Text>
            <Card.Text className="me-auto">{props.teacherName}</Card.Text>
            <Row className="justify-content-md-center">
                <Stack direction="row" spacing={2}>
                    <Col xs={2}>
                        <Row>
                            <Col xs={12}><Avatar>00</Avatar></Col>
                            <Col xs={12} className="text-sm-start">Days</Col>
                        </Row>
                    </Col>
                    <Col xs={2}>
                        <Row>
                            <Col xs={12}><Avatar>00</Avatar></Col>
                            <Col xs={12} className="text-sm-start">Days</Col>
                        </Row>
                    </Col>
                    <Col xs={2}>
                        <Row>
                            <Col xs={12}><Avatar>00</Avatar></Col>
                            <Col xs={12} className="text-sm-start">Days</Col>
                        </Row>
                    </Col>
                    <Col xs={2}>
                        <Row>
                            <Col xs={12}><Avatar>00</Avatar></Col>
                            <Col xs={12} className="text-sm-start">Days</Col>
                        </Row>
                    </Col>
                </Stack>
            </Row>
            <Row className="justify-content-end pt-3">
                <Col xs={4}>
                    <Button variant="primary" onClick={handleClick}>View <Icon.ArrowRightCircleFill /> </Button>
                </Col>
            </Row>

        </Card>
    )
}

export default ExamButton;