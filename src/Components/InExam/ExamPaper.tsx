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
import {IExamPaper, IQuestions, IStudentAnswers} from "../../Types/Questions";
import axios from "axios";
import {SAMPLE_DATA} from "../../Repository/constants";
import {IExamStudent} from "../../Types/StudentType";
import {useLocation} from "react-router-dom";

const ExamPaper:React.FC = (props) =>{
    const currentQuestionNumber:number = 1;
    const studentAnswerList:IStudentAnswers[] = [];
    const testInt:number[] = [];

    const location = useLocation();
    const courseCodeFromLoc = location.state? location.state.courseCodec : SAMPLE_DATA.COURSE_CODE;
    const studentIdFromLoc = location.state? location.state.studentId : SAMPLE_DATA.STUDENT_ID;
    let initialPaper: IExamPaper = {
        courseCode: "",
        subjectName: "",
        teacher: "",
        dateAndTime: "",
        instructions: "",
        timeDuration: "",
        questions: [{
            index: "",
            Question: "",
            answer_one: "",
            answer_two: "",
            answer_three: "",
            answer_four: "",
            correct_answer: ""
        }]
    }
    let initialStudent: IExamStudent = {
        name: '',
        studentNumber: '',
        academicYear: '',
        subjectsEnrolled: [
            {
                subName: '',
                courseCode: '',
                status: '',
                marks: ''
            }
        ]
    }

    const [questions, setQuestions] = useState<IQuestions[]>([]);
    const [examPaper, setExamPaper] = useState<IExamPaper>(initialPaper);
    const [marks, setMarks] = useState<number>(0);
    const [papersubmit, setPaperSubmit] = useState<boolean>(false);
    useEffect(() => {
        console.log("course code from loc: "+ courseCodeFromLoc);
        axios.get("http://44.203.182.193:8080/getPaperCourseCode/"+courseCodeFromLoc)
            .then((response) => {
                setExamPaper(response.data);
            })
            .catch((err) => {
                console.error(err);
            })
    }, [])

    useEffect(() => {
        console.log("marks value is " + marks);
        //let grade:number = (marks/examPaper?.questions.length)*100;
        const grade:number =  (marks / examPaper?.questions.length)*100;
        type GradeVal = "A+" | "A" | "B" | "C" | "D" | "F";
        function getGrade(marks: number):GradeVal{
            if (marks >= 90) {
                return "A+";
            } else if (marks >= 80) {
                return "A";
            } else if (marks >= 70) {
                return "B";
            } else if (marks >= 60) {
                return "C";
            } else if (marks >= 50) {
                return "D";
            } else {
                return "F";
            }
        }
        console.log("grade is " + (grade && getGrade(grade)));
        axios.get("http://44.203.182.193:8080/getStudent/" + studentIdFromLoc)
            .then((response) => {
                console.log(response.data);
                initialStudent.studentNumber = response.data.studentNumber;
                initialStudent.name = response.data.name;
                initialStudent.academicYear = response.data.academicYear;
                initialStudent.subjectsEnrolled = response.data.subjectsEnrolled;
                console.log("exam that they are writing"+examPaper?.courseCode);
                initialStudent.subjectsEnrolled.forEach((subject, index) => {
                    if(subject.courseCode == examPaper?.courseCode){
                        initialStudent.subjectsEnrolled[index].marks =   getGrade(grade);
                        initialStudent.subjectsEnrolled[index].status = "Written";
                    }
                })
                console.log("this is new student " );
                if(papersubmit){
                    axios.put("http://44.203.182.193:8080/updateStudent/" + studentIdFromLoc, initialStudent)
                        .then((response) => {
                            console.log(response.data);
                        })
                        .catch((error)=>{
                            console.log(error);
                        })
                }


            })
            .catch((error) => {
                console.log(error);
            })
    },[marks])


    const { register, handleSubmit, watch, formState: {errors} , control } = useForm();

    const [answers, setAnswers] = useState<IStudentAnswers[]>([]);

    const onSubmit = (data: any) => {
        const TempAnswer:IStudentAnswers = {
            questionNmbr: qnumber.toString(),
            answer: data.correctAnswer.value
        };
        setAnswers(prevAnswers => [...prevAnswers, TempAnswer]);

    };

    const[qnumber, setQnumber] = useState<number>(1);

    const handleOnBtnClick = (data: any) =>{
        console.log(data);
        setQnumber(data);

    }

    const renderButtons = () => {
        return examPaper?.questions.map(questions => {
            return <Col sm={3}>
                <ExamQuestionButtonComponent
                    questionNumber={Number(questions.index)}
                    questionShadow={qnumber === Number(questions.index) ? eQuestShadow.on : eQuestShadow.off}
                    setOnButtonClick={handleOnBtnClick}
                />
            </Col>
        })
    }
    const renderQuestions = () => {
        return examPaper?.questions.map(onequestion => {
            if(Number(onequestion.index) == qnumber){
                return <>{onequestion.Question}</>
            }
            return <></>
        })
    }
    const handleOnEndExam = () => {
        //console.log(answers);
        examPaper?.questions.forEach((singleQ, index) => {
            if(singleQ.correct_answer == answers[index].answer){
                setMarks(prevMarks => prevMarks + 1);

            }else{
                console.log("elsePath");
                setMarks(prevMarks => prevMarks);
            }
        })
        setPaperSubmit(true);

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
        return examPaper?.questions.map(onequestion => {
            if(Number(onequestion.index) === qnumber){
                return (<Row>
                    <Col xs={12}>
                        1. {onequestion.answer_one}
                    </Col>
                    <Col xs={12}>
                        2. {onequestion.answer_two}
                    </Col>
                    <Col xs={12}>
                        3. {onequestion.answer_three}
                    </Col>
                    <Col xs={12}>
                        4. {onequestion.answer_four}
                    </Col>
                </Row>)
            }
        })
    }
    return(
        <Container fluid={true}>
            <Navigationbar/>
            {/*<Button>{qnumber}</Button>*/}
            <Row className="justify-content-center bg-light-grey pt-3" >
                <Col xs={8}><h1>{courseCodeFromLoc} - exam</h1></Col>
            </Row>
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