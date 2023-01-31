import React from 'react';
import './App.css';
import './Assets/Styles/_main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExamDetailsDashboard from "./Components/InExam/ExamDetails/ExamDetailsDashboard";
import HomepageTest from "./Components/Common/HomepageTest";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomepageTest/>} />
                <Route path="/examdetails" element={<ExamDetailsDashboard/>}/>
                <Route path="/studentdashboard"/>
                <Route path="/teacherdashboard"/>
                <Route path="/examresult"/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
