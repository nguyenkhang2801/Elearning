import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Box } from "@material-ui/core";

function MyInfo() {
  const [studentId, setStudentId] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentFalcuty, setStudentFalcuty] = useState("");
  const [grade, setGrade] = useState("");
  const [stateOfStudy, setSTateOfStudy] = useState("");
  const [studentInfo, setStudentInfo] = useState([]);

  let id = localStorage.getItem("id");
  console.log(id);

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/getstudentinfo?id=${id}`).then(
      (response) => {
        setStudentInfo(response.data);
      }
    );
  }, [studentInfo]);

  return (
    <div className="App">
      <h1>Student Info</h1>
      <ul className="studentInfo">
        {studentInfo.map((student) => (
          <li key={student.StudentId}>
            <Box>
              Id: {student.StudentId} | Name: {student.StudentName} | Falcuty:
              {student.StudentFalcuty}| Grade:{student.Grade} | State of study:{" "}
              {student.StateOfStudy}
            </Box>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyInfo;
