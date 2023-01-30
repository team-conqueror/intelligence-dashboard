import React, {FC} from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import {Avatar, Stack} from "@mui/material";
import * as Icon from "react-bootstrap-icons";

const ExamButton:FC = () => {
    return(
        <Card className="pt-4 pe-5 ps-5 pb-4">
            <Card.Title className="me-auto" >Course Code</Card.Title>
            <Card.Text className="me-auto mb-0" >Examination - octomber 2021</Card.Text>
            <Card.Text className="me-auto">By: John Snow</Card.Text>
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
                    <Button variant="primary">View <Icon.ArrowRightCircleFill /> </Button>
                </Col>
            </Row>

        </Card>
    )
}

export default ExamButton;