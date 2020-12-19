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

app.get("/api/getstudentsubject", (req, res) => {
  const sqlSelect = "SELECT ClassId FROM student where StudentID=?;";
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
