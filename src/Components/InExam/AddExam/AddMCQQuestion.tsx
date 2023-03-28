import React, {useState} from "react";
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";

type ISingleMcqQuestion = {
    addQuestion : (question:IMcqQuestion) => void
}

export type IMcqQuestion = {
    question: string
    answer1: string
    answer2: string
    answer3: string
    answer4: string
    correctAnswer: string
}

const AddMCQQuestion:React.FC<ISingleMcqQuestion> = (props) => {
    const [question, setQuestion] = useState('');
    const [answerOne, setAnswerOne] = useState('');
    const [answerTwo, setAnswerTwo] = useState('');
    const [answerThree, setAnswerThree] = useState('');
    const [answerFour, setAnswerFour] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');

    const { register, handleSubmit, watch, formState: {errors} , control } = useForm();
    const onSubmit = (data: any) => {
        props.addQuestion(data);
    };

    return(
        <Card className="p-5 mt-5 shadow-sm">

            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Question</Form.Label>
                    <Form.Control placeholder="Enter Question"
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                </Form.Group>
                <Row className="mt-5">
                    <Col xs={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Answer 1: </Form.Label>
                            <Form.Control placeholder="enter answer one"
                                          onChange={(e) =>
                                              setAnswerOne(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Answer 2: </Form.Label>
                            <Form.Control placeholder="enter answer two"
                                          onChange={(e) =>
                                              setAnswerTwo(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Answer 3: </Form.Label>
                            <Form.Control placeholder="enter answer three"
                                          onChange={(e) =>
                                              setAnswerThree(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Answer 4: </Form.Label>
                            <Form.Control placeholder="enter answer four"
                                          onChange={(e) =>
                                              setAnswerFour(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={6} className="mt-4">
                        <label>Correct Answer</label>
                        <Form.Group className="mb-3">
                            <Form.Label>Answer 1: </Form.Label>
                            <Form.Select aria-label="Default select example"
                                onChange={(e)=>
                                    setCorrectAnswer(e.target.value)
                                }
                            >
                                <option>Open this to select answer</option>
                                <option value="1">one</option>
                                <option value="2">two</option>
                                <option value="3">three</option>
                                <option value="4">four</option>
                            </Form.Select>
                        </Form.Group>

                    </Col>
                </Row>
                <Button onClick={()=>{
                    props.addQuestion({question: question,
                        correctAnswer: correctAnswer,
                        answer2: answerTwo,
                        answer1: answerOne,
                        answer3: answerThree,
                        answer4: answerFour
                    })
                }} >
                    Add this question
                </Button>
                {/*<AntdInput type="submit" className="mt-4 w-25" value="Add This Question"/>*/}
            </Form>
        </Card>
    )
}

export default AddMCQQuestion;