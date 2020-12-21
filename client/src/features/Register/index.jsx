import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Axios from "axios";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

function Register() {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  const classes = useStyles();

  const [studentId, setId] = useState(localStorage.getItem("id"));
  const [searchSubjectClass, setSearchSubjectClass] = useState([]);
  //dialog handle

  //get all subject of falcuty
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // useEffect(() => {
  //   Axios.get(
  //     `http://localhost:3001/api/getsubjectsearch?subjectid=${subjectId}`
  //   ).then((response) => {
  //     setSearchSubjectClass(response.data); //okay
  //   });
  // }, [subjectId]);

  //get all subject that student registered
  const [studentClasses, setStudentClasses] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/getstudentclass?id=${studentId}`).then(
      (response) => {
        setStudentClasses(response.data); //okay
      }
    );
  }, [studentId]);

  const handleSubmit = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      {/* <form className={classes.root} noValidate autoComplete="off">
        <form onSubmit={(e) => handleSubmit(e)}>
          <Box>
            <TextField id="standard-basic" label="Enter Subject ID" />
            <Button type="submit" color="secondary" variant="contained">
              Submit
            </Button>
          </Box>
        </form>
      </form> */}
    </div>
  );
}

export default Register;
