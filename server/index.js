const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "1912",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/getstudentinfo", (req, res) => {
  const sqlSelect = "SELECT * FROM teacher where StudentID=?;";
  db.query(sqlSelect, +[req.query.id], (err, result) => {
    res.send(result);
  });
});

app.get("/api/getteacherinfo", (req, res) => {
  const sqlSelect = "SELECT * FROM teacher where TeacherId=?;";
  db.query(sqlSelect, +[req.query.id], (err, result) => {
    res.send(result);
  });
});

app.get("/api/login", (req, res) => {
  let sqlSelect = '';
  const id = req.query.id;
  if(100 <= id && id <= 999){  
    sqlSelect = "SELECT * FROM teacher where TeacherId=?;";
  }
  else {
    sqlSelect = "SELECT * FROM student where StudentID=?;";
  }
  db.query(sqlSelect, +[id], (err, result) => {
    if (result.length > 0) {
      res.send(result);
    }
  });
});

//get the subject that the student registered by student ID/2010742 /
app.get("/api/getstudentclass", (req, res) => {
  const sqlSelect =
    "SELECT t.ClassId,  c.CSubjectId,c.MainTeacher,c.CFalcility,c.CBuilding,c.CRoom,s.SubjectName,s.CollegeCredit FROM USE as u, TEXTBOOK as t, CLASS as c, SUBJECT as s where t.StudentID=? AND t.ClassId = c.ClassId AND s.SubjectId=c.CSubjectId;";
  db.query(sqlSelect, +[req.query.id], (err, result) => {
    if (result.length > 0) {
      res.send(result);
    }
  });
});

// Get student in classId
app.get("/api/getstudentinclass", (req, res) => {
  const sqlSelect =
    "SELECT * FROM TAKECLASS as t where t.classId=?;";
  db.query(sqlSelect, +[req.query.classId], (err, result) => {
    if (result.length > 0) {
      res.send(result);
    }
  });
});

// Get textbook with subjectID
app.get("/api/gettextbook", (req, res) => {
  const sqlSelect =
    "SELECT * FROM `use`, `textbook` where use.UseSubjectId=? AND use.UseTextBookId=textbook.TextBookId;";
  db.query(sqlSelect, +[req.query.subjectId], (err, result) => {
    if (result.length > 0) {
      console.log(result);
      res.send(result);
    }
  });
});

//get the class of teacher with id 
app.get("/api/getteacherclass", (req, res) => {
  const sqlSelect =
    "SELECT * FROM CLASS as c where c.MainTeacher =?";
  db.query(sqlSelect, +[req.query.id], (err, result) => {
    if (result.length > 0) {
      res.send(result);
    }
  });
});

//get all class of a subject with subject id
app.get("/api/getsubjectsearch", (req, res) => {
  const sqlSelect =
    "SELECT subject.SubjectId, subject.SubjectName, subject.CollegeCredit, class.ClassId,class.CFalcility,class.MainTeacher,class.NumberOfStudent FROM subject , class where class.CSubjectId=? AND subject.SubjectId = class.CSubjectId;";
  db.query(sqlSelect, +[req.query.id], (err, result) => {
    if (result.length > 0) {
      res.send(result);
    }
  });
});

// app.get("/api/getstudentremove", (req, res) => {
//   const sqlSelect = "";
//   db.query(sqlSelect, +[req.query.id], (err, result) => {
//     if (result.length > 0) {
//       console.log(result);
//       res.send(result);
//     }
//   });
// });

app.listen(3001, () => {
  console.log("running on port 3001");
});
