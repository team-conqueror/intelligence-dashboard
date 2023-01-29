import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from "./Components/Common/Navigationbar";
import ExamPaper from "./Components/InExam/ExamPaper";

function App() {
    return (
        <div className="App m-0 p-0 bg-light">
            <Navigationbar/>
            <ExamPaper/>
        </div>
    );
}

export default App;
