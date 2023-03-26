import React, {useState, useEffect} from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {examQuestionsSample} from "../../Repository/ExamQuestions/ExamQuestionsSample";
import Navigationbar from "../Common/Navigationbar";
import ExamQuestionButtonComponent from "./ExamPaper/ExamQuestionButtonComponent";
import {eQuestShadow} from "../../Types/ExamQuestionButtonType";
import {Controller, useForm} from "react-hook-form";
import {Input} from "@material-ui/core";
import Select from "react-select";
import {Input as AntdInput} from "antd";
import {IQuestions, IStudentAnswers} from "../../Types/Questions";
import axios from "axios";

const ExamPaper:React.FC = (props) =>{
    const currentQuestionNumber:number = 1;
    const studentAnswerList:IStudentAnswers[] = [];
    const testInt:number[] = [];

    const [questions, setQuestions] = useState<IQuestions[]>([]);
    useEffect(() => {
        axios.get("http://localhost:8080/getPapers")
            .then((response) => {
                setQuestions(response.data);
                console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
            })
    }, [])


    const { register, handleSubmit, watch, formState: {errors} , control } = useForm();

    const [answers, setAnswers] = useState<IStudentAnswers[]>([]);

    const onSubmit = (data: any) => {
        const TempAnswer:IStudentAnswers = {
            questionNmbr: qnumber.toString(),
            answer: data.correctAnswer.value
        };
        setAnswers(prevAnswers => [...prevAnswers, TempAnswer]);
        console.log(answers);
    };

    const[qnumber, setQnumber] = useState<number>(1);

    const handleOnBtnClick = (data: any) =>{
        console.log(data);
        setQnumber(data);
    }

    /*const renderButtons = () => {
        console.log("this is questions" + questions[0].index);
        return examQuestionsSample.map(questions => {
          return <Col sm={3}>
              <ExamQuestionButtonComponent
                  questionNumber={questions.index}
                  questionShadow={qnumber === questions.index ? eQuestShadow.on : eQuestShadow.off}
                  setOnButtonClick={handleOnBtnClick}
                  />
          </Col>
        })
    }*/
    const renderButtons = () => {
        console.log("this is questions" + questions[0]?.index );
        return questions?.map(questions => {
            return <Col sm={3}>
                <ExamQuestionButtonComponent
                    questionNumber={questions.index}
                    questionShadow={qnumber === questions.index ? eQuestShadow.on : eQuestShadow.off}
                    setOnButtonClick={handleOnBtnClick}
                />
            </Col>
        })
    }
    const renderQuestions = () => {
        return questions?.map(onequestion => {
            if(onequestion.index == qnumber){
                return <>{onequestion.Question}</>
            }
            return <></>
        })
    }
    const handleOnEndExam = () => {
        console.log(answers);
    }
    const SelectionValidity = () => {
        var foundQ:boolean = false;
        var tempAns: string = "";
        answers.map(answer => {
            if(qnumber.toString() == answer.questionNmbr){
                foundQ = true;
                tempAns = answer.answer;
            }
        })
        if(foundQ){
            return(
                <Button disabled>Submitted {tempAns} </Button>
            )
        }else{
            return (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Correct Answer</label>

                    <Controller
                        name="correctAnswer"
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={[
                                    { value: "1", label: "1" },
                                    { value: "2", label: "2" },
                                    { value: "3", label: "3" },
                                    { value: "4", label: "4" }
                                ]}
                            />
                        )}
                        control={control}
                        defaultValue="1"
                    />
                    <AntdInput
                        type="submit"
                        className="mt-4"
                        value="Submit"/>
                </form>
            );
        }
    }
    const renderAnswers = () => {
        return questions?.map(onequestion => {
            if(onequestion.index === qnumber){
                return (<Row>
                    <Col xs={12}>
                        1. {onequestion.Answers.answer_one}
                    </Col>
                    <Col xs={12}>
                        2. {onequestion.Answers.answer_two}
                    </Col>
                    <Col xs={12}>
                        3. {onequestion.Answers.answer_three}
                    </Col>
                    <Col xs={12}>
                        4. {onequestion.Answers.answer_four}
                    </Col>
                </Row>)
            }
        })
    }
    return(
        <Container fluid={true}>
            <Navigationbar/>
            {/*<Button>{qnumber}</Button>*/}
            <Row className="justify-content-center bg-light-grey" >
                <Col xs={8}>
                    <Row className="justify-content-md-end ">
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
                                            <header>Question {qnumber}</header>
                                            {renderQuestions()}
                                        </Card.Body>
                                    </Card>
                                    <Card className="shadow-sm mt-5">
                                        <Card.Body>
                                            {renderAnswers()}
                                            {SelectionValidity()}
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
                                    <Button variant="danger mt-5"
                                            onClick={e => {
                                                handleOnEndExam();

                                            }}
                                    >End Exam</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}

export default ExamPaper;