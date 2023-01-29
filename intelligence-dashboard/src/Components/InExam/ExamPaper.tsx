import React from "react";
import {Container, Row, Col, Button, Card} from "react-bootstrap";
import {FormGroup, FormControlLabel, RadioGroup, FormControl, FormLabel, Radio} from "@mui/material";

const ExamPaper:React.FC = () =>{
    const buttons:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];
    const renderButtons = () => {
        return buttons.map(btnnumber => {
            return <Col sm={3}>
                <Button variant="outline-primary mt-5">{btnnumber}</Button>
            </Col>
        })
    }
    return(
        <Container>
            <Row className="justify-content-md-end">
                <Col sm={3} className="">
                    <Row>
                        {renderButtons()}
                    </Row>
                </Col>
                <Col sm={6} className="mt-5" >
                    <Row>
                        <Col sm={12}>
                            <Card className="shadow-sm">
                                <Card.Body>
                                    <header>Question 01</header>
                                    Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Card.Body>
                            </Card>
                            <Card className="shadow-sm mt-5">
                                <Card.Body>
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label"
                                                   className="text-grey me-auto"
                                        >Answers</FormLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="radio-buttons-group"
                                        >
                                            <FormControlLabel value="1" control={<Radio/>} label={
                                                "1. Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit"
                                            }/>
                                            <FormControlLabel value="2" control={<Radio/>} label={
                                                "2. sed do eiusmod tempor incididunt ut labore et"
                                            }/>
                                            <FormControlLabel value="3" control={<Radio/>} label={
                                                "3. dolore magna aliqua. Ut enim ad minim veniam, quis"
                                            }/>
                                            <FormControlLabel value="4" control={<Radio/>} label={
                                                "4. dolore magna aliqua. Ut enim ad minim veniam, quis"
                                            }/>
                                        </RadioGroup>
                                    </FormControl>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col sm={3} className="">
                    <Row>
                        <Col sm={12} className="justify-content-center" >
                            <Card className="mt-5 shadow-sm">
                                <Card.Body className="text-danger fs-2 font-weight-bold">
                                    Timer
                                </Card.Body>
                                <Card.Body className="text-dark fs-1 font-weight-bold">
                                    00:12:41
                                </Card.Body>
                                <Card.Body className="text-grey fs-4 font-weight-bold">
                                    remaining
                                </Card.Body>

                            </Card>
                        </Col>
                        <Col sm={12}>
                            <Button variant="primary mt-5">Video Conference</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default ExamPaper;