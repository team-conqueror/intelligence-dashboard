import React from "react";
import {Card, Col, Row} from "react-bootstrap";
import {Avatar} from "@mui/material";
import {lightBlue} from "@mui/material/colors";
import * as Icon from "react-bootstrap-icons";
import {eExamDetailsIcons, examDetailsDashboardType} from "../../../Types/ExamDetailsDashboardType";

const ExamDashboardItem:React.FC<examDetailsDashboardType> = (props) => {
    const renderIcon = () => {
        switch (props.icon){
            case eExamDetailsIcons.flag :
                return <Icon.Person className="text-primary"/>;
            case eExamDetailsIcons.person :
                return <Icon.Person className="text-primary"/>;
            case eExamDetailsIcons.checkCircle :
                return <Icon.Person className="text-primary"/>;
            case eExamDetailsIcons.star:
                return <Icon.Person className="text-primary"/>;
            case eExamDetailsIcons.xCircle:
                return <Icon.Person className="text-primary"/>;
        }

    }
    return(
        <Col xs={4}>
            <Card className="mt-2 p-3">
                <Card.Text>
                    <Row>
                        <Col xs={3}>
                            <Avatar sx={{bgcolor: props.avatar_color[200]}} >
                                {renderIcon()}
                            </Avatar>
                        </Col>
                        <Col xs={9}>
                            <Row className="justify-content-start">
                                <Col xs={12} className="text-start">{props.top_text}</Col>
                                <Col xs={12} className="text-start">{props.bottom_text}</Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Text>
            </Card>
        </Col>
    )
}

export default ExamDashboardItem;