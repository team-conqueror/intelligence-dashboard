import React from 'react';
import Navigationbar from "../Common/Navigationbar";
import SearchArea from "../SearchArea/SearchArea";
import {Button, Col, Container, Row} from "react-bootstrap";
import ExamResultLeftArea from "./ExamResultLeftArea";
import ExamMiddleArea from "./ExamMiddleArea";
import ExamResultRightArea from "./ExamResultRightArea";

const ExamResultComponent:React.FC = () => {
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
                    <ExamResultRightArea/>
                </Col>
            </Row>
        </Container>
    )
}

export default ExamResultComponent;