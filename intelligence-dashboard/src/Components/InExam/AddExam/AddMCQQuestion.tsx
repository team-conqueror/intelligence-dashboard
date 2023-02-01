import React from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import {useForm, Controller} from "react-hook-form";
import { Checkbox, Input } from "@material-ui/core";
import Select from "react-select";
import * as Icon from "react-bootstrap-icons";

import { Input as AntdInput } from "antd";

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

    const { register, handleSubmit, watch, formState: {errors} , control } = useForm();
    const onSubmit = (data: any) => {
        props.addQuestion(data);
    };

    return(
        <Card className="p-5 mt-5 shadow-sm">

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Question</label>
                <Controller
                    render={({ field }) => <Input {...field} />}
                    name="question"
                    control={control}
                    defaultValue=""
                />
                <Row className="mt-5">
                    <Col xs={6}>
                        <label>Answer 1:</label>
                        <Controller
                            render={({ field }) => <Input {...field} />}
                            name="answer1"
                            control={control}
                            defaultValue=""
                        />
                    </Col>
                    <Col xs={6}>
                        <label>Answer 2:</label>
                        <Controller
                            render={({ field }) => <Input {...field} />}
                            name="answer2"
                            control={control}
                            defaultValue=""
                        />
                    </Col>
                    <Col xs={6}>
                        <label>Answer 3:</label>
                        <Controller
                            render={({ field }) => <Input {...field} />}
                            name="answer3"
                            control={control}
                            defaultValue=""
                        />
                    </Col>
                    <Col xs={6}>
                        <label>Answer 4:</label>
                        <Controller
                            render={({ field }) => <Input {...field} />}
                            name="answer4"
                            control={control}
                            defaultValue=""
                        />
                    </Col>
                    <Col xs={6} className="mt-4">
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
                            defaultValue=""
                        />
                    </Col>
                </Row>

                <AntdInput type="submit" className="mt-4 w-25" value="Add This Question"/>
            </form>
        </Card>
    )
}

export default AddMCQQuestion;