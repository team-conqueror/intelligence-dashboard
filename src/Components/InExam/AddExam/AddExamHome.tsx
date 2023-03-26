import React, {useState} from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Navigationbar from "../../Common/Navigationbar";
import * as Icon from "react-bootstrap-icons";
import {useForm, Controller} from "react-hook-form";
import { Checkbox, Input } from "@material-ui/core";
import { Input as AntdInput } from "antd";
import AddMCQQuestion, {IMcqQuestion} from "./AddMCQQuestion";
import {IExamPaperType, IServerExamPaper, IServerSingleQuestion} from "../../../Types/ExamPaperType";
import axios from 'axios';

export type IExam = {
    testFunction: (hello:number) => void
}

const AddExamHome:React.FC<IExam> = (props) => {

    const [questionsToAdd, setQuestionsToAdd] = useState<IServerSingleQuestion[]>([]);

    const examPaper:IExamPaperType = {
        subjectName: "",
        courseCode: "",
        teacher: "",
        dateAndTime: "",
        timeDuration: "",
        instructions: "",
        questions: []
    }
    const tempQuestion:IServerSingleQuestion = {
        index: "1",
        Question: "sfdafs",
        answer_one: "sfda",
        answer_two: "fasdf",
        answer_three: "sdaf",
        answer_four: "sfad",
        correct_answer: "fsdfa"
    };
    let tempPaper:IServerExamPaper = {
        subjectName: "Hello",
        teacher: "sdfa",
        timeDuration: "fsdaf",
        courseCode: "fsdaf",
        dateAndTime: "sfad",
        instruction: "sfad",
        questions: [tempQuestion, tempQuestion]
    }

    const[serverExamPaper, setServerExamPaper] = useState<IServerExamPaper>();
    const[serverQuestion, setServerQuestions] = useState<IServerSingleQuestion[]>([]);
    const[numberOfQuestions, setNumberOfQuestions] = useState(0);

    const addItemsToServerArray = (paper:IServerExamPaper) => {
        setServerExamPaper(tempPaper);
    }
    const addItemsToServerQuestions = (question:IServerSingleQuestion) => {
        setNumberOfQuestions(numberOfQuestions + 1);
        setServerQuestions([...serverQuestion,question ]);
    }
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };



    const { register, handleSubmit, watch, formState: {errors} , control } = useForm();
    const onSubmit = (data: any) => {
        examPaper.subjectName = data.subjectName;
        examPaper.teacher = data.teacher;
        examPaper.timeDuration = data.timeDuration;
        examPaper.courseCode = data.courseCode;
        examPaper.dateAndTime = data.dateAndTime;
        examPaper.instructions = data.instructions;

        tempPaper={
            subjectName : data.subjectName,
            dateAndTime: data.dateAndTime,
            teacher: data.teacher,
            courseCode: data.courseCode,
            timeDuration: data.timeDuration,
            instruction: data.instructions,
            questions: questionsToAdd
        }
        addItemsToServerArray(tempPaper);
        axios.post('http://localhost:8080/addpaper', tempPaper,{headers})
            .then(res=>{
                console.log(res.data);
            })
            .catch(err => {
                console.error(err.response.data);
            });
        console.log(tempPaper);

    };


    const AddAQuestion = (data:IMcqQuestion) => {
        addItemsToServerQuestions({
            index: (questionsToAdd.length+1).toString(),
            Question: data.question,
            answer_one: data.answer1,
            answer_two: data.answer2,
            answer_three: data.answer3,
            answer_four: data.answer4,
            correct_answer: data.correctAnswer
        })
        examPaper.questions.push(data);
        setQuestionsToAdd([...questionsToAdd,{
            index: (questionsToAdd.length+1).toString(),
            Question: data.question,
            answer_one: data.answer1,
            answer_two: data.answer2,
            answer_three: data.answer3,
            answer_four: data.answer4,
            correct_answer: data.correctAnswer
        }]);
        console.log(questionsToAdd);
    }

    return(
        <Container fluid={true} className="bg-purple-half p-0" >
            <Navigationbar/>
            <Row className="justify-content-center m-0">
                <Col xs={12} sm={8}>
                    <Row className="justify-content-center">
                        <Col xs={12} className="mb-4 mt-5">
                            <Button variant="outline-light" >
                                <Icon.CaretLeftFill/>
                                {" "}All Exams
                            </Button>
                        </Col>
                        <Col xs={12}>
                            <Card className="p-5 shadow-lg">
                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <Row>
                                        <Col xs={6}>
                                            <Row>
                                                <Col xs={12} className="pt-1">
                                                    <label>Subject Name</label>
                                                </Col>
                                                <Col xs={12}>
                                                    <Controller
                                                        render={({ field }) => <Input {...field} />}
                                                        name="subjectName"
                                                        control={control}
                                                        defaultValue=""
                                                    />
                                                </Col>
                                                <Col xs={12} className="pt-2" >
                                                    <label>Teacher Name</label>
                                                </Col>
                                                <Col xs={12}>
                                                    <Controller
                                                        render={({ field }) => <Input {...field} />}
                                                        name="teacher"
                                                        control={control}
                                                        defaultValue=""
                                                    />
                                                </Col>
                                                <Col xs={12} className="pt-2">
                                                    <label>Time Duration</label>
                                                </Col>
                                                <Col xs={12}>
                                                    <Controller
                                                        render={({ field }) => <Input {...field} />}
                                                        name="timeDuration"
                                                        control={control}
                                                        defaultValue=""
                                                    />
                                                </Col>

                                            </Row>


                                        </Col>
                                        <Col xs={6}>
                                            <Row>
                                                <Col xs={12} className="pt-1">
                                                    <label>Course Code</label>
                                                </Col>
                                                <Col xs={12}>
                                                    <Controller
                                                        render={({ field }) => <Input {...field} />}
                                                        name="courseCode"
                                                        control={control}
                                                        defaultValue=""
                                                    />
                                                </Col>
                                                <Col xs={12} className="pt-2" >
                                                    <label>Date and Time</label>
                                                </Col>
                                                <Col xs={12}>
                                                    <Controller
                                                        render={({ field }) => <Input {...field} />}
                                                        name="dateAndTime"
                                                        control={control}
                                                        defaultValue=""
                                                    />
                                                </Col>
                                                <Col xs={12} className="pt-2">
                                                    <label>Instructions</label>
                                                </Col>
                                                <Col xs={12}>
                                                    <Controller
                                                        render={({ field }) => <Input {...field} />}
                                                        name="instructions"
                                                        control={control}
                                                        defaultValue=""
                                                    />
                                                </Col>

                                            </Row>
                                        </Col>
                                        {errors.exampleRequired && <span>This field is required</span>}
                                        <h6 className="mt-4">Number of Questions added: {numberOfQuestions}</h6>

                                        <AddMCQQuestion addQuestion={AddAQuestion}/>

                                        <AntdInput type="submit" className="mt-5 w-25" value="Add paper"/>
                                    </Row>

                                </form>

                            </Card>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default AddExamHome;