import React, { useState, useEffect } from "react";
import Axios from "axios";

function MyInfo() {
  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentFalcuty, setStudentFalcuty] = useState("");
  const [grade, setGrade] = useState("");
  const [stateOfStudy, setSTateOfStudy] = useState("");
  const [studentInfo, setStudentInfo] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/api/getstudentinfo").then((response) => {
      setStudentInfo(response.data);
      console.log(studentInfo);
    });
  }, []);

  return (
    <div className="App">
      <h1>Student Info</h1>
      <ul className="studentInfo">
        {studentInfo.map((student) => (
          <li key={student.StudentID}>
            <p>
              Id: {student.StudentID} | Name: {student.StudentName} | Falcuty:
              {student.StudentFalcuty}| Grade:{student.Grade} | State of study:{" "}
              {student.StateOfStudy}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyInfo;
