import React from 'react';
import './App.css';
import './Assets/Styles/_main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExamDetailsDashboard from "./Components/InExam/ExamDetails/ExamDetailsDashboard";

function App() {
    return (
        <div className="App m-0 p-0 bg-light">
            <ExamDetailsDashboard/>
        </div>
    );
}

export default App;
