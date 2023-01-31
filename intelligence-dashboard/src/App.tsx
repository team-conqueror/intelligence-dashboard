import React from 'react';
import './App.css';
import './Assets/Styles/_main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExamDetailsDashboard from "./Components/InExam/ExamDetails/ExamDetailsDashboard";
import HomepageTest from "./Components/Common/HomepageTest";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ExamDashboard from "./Components/InExam/ExamDashboard/ExamDashboard";
import ExamPaper from "./Components/InExam/ExamPaper";
import ExamResultComponent from "./Components/ExamResult/ExamResultComponent";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomepageTest/>} />
                <Route path="/examdetails" element={<ExamDetailsDashboard/>}/>
                <Route path="/studentdashboard" element={<ExamDashboard/>} />
                <Route path="/teacherdashboard" element={<ExamDashboard/>}/>
                <Route path="/exampaper" element={<ExamPaper/>}/>
                <Route path="/examresult" element={<ExamResultComponent/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
