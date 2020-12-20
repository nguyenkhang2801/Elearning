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
import { ListAlt, ListALt } from "@material-ui/icons";

MyPage.propTypes = {};

let id = localStorage.getItem("id");

function MyPage(props) {
  const [open, setOpen] = React.useState(false);
  //dialog handle
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [studentClasses, setStudentClasses] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/getstudentclass?id=${id}`).then(
      (response) => {
        setStudentClasses(response.data); //okay
      }
    );
  }, [id]);

  return (
    <div>
      <ul className="studentClassInfo">
        {studentClasses.map((studentClass) => (
          <li key={studentClass.ClassId}>
            <Box>
              <p>{studentClass.SubjectName}</p>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClickOpen}
                startIcon={<ListAlt />}
              >
                Detail
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">
                  {studentClass.SubjectName}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Class Id: {studentClass.ClassId}
                  </DialogContentText>
                  <DialogContentText>
                    Subject Id: {studentClass.CSubjectId}
                  </DialogContentText>
                  <DialogContentText>
                    Credit: {studentClass.CollegeCredit}
                  </DialogContentText>
                  <DialogContentText>
                    Main Teacher: {studentClass.MainTeacher}
                  </DialogContentText>
                  <DialogContentText>
                    Falcility: {studentClass.CFalcility}
                  </DialogContentText>
                  <DialogContentText>
                    Building: {studentClass.CBuilding}
                  </DialogContentText>
                  <DialogContentText>
                    Room: {studentClass.CRoom}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleClose} color="primary">
                    Subscribe
                  </Button>
                </DialogActions>
              </Dialog>
            </Box>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyPage;
