import React from "react";
import {CircularProgress} from "@material-ui/core";
import {Spinner} from "react-bootstrap";

const LoadingScreen:React.FC = () => {
    return(
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
            }}
        >
            <Spinner animation="grow" className="text-purple" />

        </div>
    )
}

export default LoadingScreen;