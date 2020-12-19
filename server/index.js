const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "ass_1512",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/getstudentinfo", (req, res) => {
  const sqlSelect = "SELECT * FROM student;";
  db.query(sqlSelect, (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.get("/api/login", (req, res) => {
  console.log(req);
  const sqlSelect = "SELECT * FROM student where StudentID=?;";
  db.query(sqlSelect, +[req.username], (err, result) => {
    console.log(result);
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
