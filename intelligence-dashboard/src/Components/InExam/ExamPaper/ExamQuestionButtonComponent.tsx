import React from "react";
import {eQuestShadow} from "../../../Types/ExamQuestionButtonType";
import {Button, Container} from "react-bootstrap";
type IQuestBtn = {
    questionNumber:number
    questionShadow: eQuestShadow
    setOnButtonClick: () => void
}

const ExamQuestionButtonComponent:React.FC<IQuestBtn> = (props) => {
    const renderShadow = () =>{
        if(props.questionShadow === eQuestShadow.on){
            return "shadow-sm"
        }else{
            return ""
        }
    }
    return(
        <Container  className={"mt-5  text-center" + renderShadow()}>
            <Button
                variant="outline-dark"
                onClick={props.setOnButtonClick}
            >{props.questionNumber}</Button>

        </Container>
    )
}

export default ExamQuestionButtonComponent;