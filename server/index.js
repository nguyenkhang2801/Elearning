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
  const sqlSelect = "SELECT * FROM student where StudentID=?;";
  db.query(sqlSelect, +[req.query.id], (err, result) => {
    res.send(result);
  });
});

app.get("/api/login", (req, res) => {
  const sqlSelect = "SELECT * FROM student where StudentID=?;";
  db.query(sqlSelect, +[req.query.id], (err, result) => {
    if (result.length > 0) {
      console.log(result);
      res.send(result);
    }
  });
});

app.get("/api/getstudentclass", (req, res) => {
  const sqlSelect =
    "SELECT t.ClassId,  c.CSubjectId,c.MainTeacher,c.CFalcility,c.CBuilding,c.CRoom,s.SubjectName,s.CollegeCredit FROM TAKECLASS as t, CLASS as c, SUBJECT as s where StudentID=? AND t.ClassId = c.ClassId AND s.SubjectId=c.CSubjectId;";
  db.query(sqlSelect, +[req.query.id], (err, result) => {
    if (result.length > 0) {
      console.log(result);
      res.send(result);
    }
  });
});

app.get("/api/getstudentregister", (req, res) => {
  const sqlSelect =
    "SELECT s.SubjectId, s.SubjectName, s.CollegeCredit, s.SJFacultyId, c.ClassId,c.NumberOfStudent,c.MainTeacher FROM subject as s, student as stu, class as c where StudentID=? AND s.SJFacultyId=stu.SFacultyId AND s.SubjectId=c.CSubjectId;";
  db.query(sqlSelect, +[req.query.id], (err, result) => {
    if (result.length > 0) {
      console.log(result);
      res.send(result);
    }
  });
});

app.get("/api/getstudentremove", (req, res) => {
  const sqlSelect = "";
  db.query(sqlSelect, +[req.query.id], (err, result) => {
    if (result.length > 0) {
      console.log(result);
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
