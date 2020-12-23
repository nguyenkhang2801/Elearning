import React, { useState, useEffect } from "react";
import Axios from "axios";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Box } from "@material-ui/core";
import { ListAlt } from "@material-ui/icons";

function ButtonList(props) {
  const [openStudentList, setOpenStudentList] = useState(false);
  const [openRoomDetail, setOpenRoomDetail] = useState(false);
  const [openTextBook, setOpenTextBook] = useState(false);

  const [listStudent, setListStudent] = useState([]);
  const { teacherClass } = props;

  const handleClose = (name) => {
    switch(name){
      case 'StudentList':
        setOpenStudentList(false);
        break;
      case 'RoomDetail':
        setOpenRoomDetail(false);
        break;
      case 'TextBook':
        setOpenTextBook(false);
        break;
      default:
        break;
        
    }
  };

  function handleStudentList() {
    setOpenStudentList(!openStudentList);
    Axios.get(`http://localhost:3001/api/getstudentinclass?classId=${teacherClass.ClassId}`).then(
      (response) => {
        setListStudent(response.data); //okay
        console.log('listStudent: ', listStudent);
      }
    );
  };

  return (
    <Box>
      <p>{teacherClass.CRoom}{teacherClass.CBuilding}</p>
      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => handleStudentList()}
        startIcon={<ListAlt />}
      >
        Student List
      </Button>
      <Dialog
        open={open}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {teacherClass.SubjectName}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Class Id: {teacherClass.ClassId}
          </DialogContentText>
          <DialogContentText>
            Subject Id: {teacherClass.CSubjectId}
          </DialogContentText>
          <DialogContentText>
            Credit: {teacherClass.CollegeCredit}
          </DialogContentText>
          <DialogContentText>
            Main Teacher: {teacherClass.MainTeacher}
          </DialogContentText>
          <DialogContentText>
            Falcility: {teacherClass.CFalcility}
          </DialogContentText>
          <DialogContentText>
            Building: {teacherClass.CBuilding}
          </DialogContentText>
          <DialogContentText>Room: {teacherClass.CRoom}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => handleClick()}
        startIcon={<ListAlt />}
      >
        Room Detail
      </Button>
      <Dialog
        open={open}
        onClose={(e) => handleClick()}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {teacherClass.SubjectName}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Class Id: {teacherClass.ClassId}
          </DialogContentText>
          <DialogContentText>
            Subject Id: {teacherClass.CSubjectId}
          </DialogContentText>
          <DialogContentText>
            Credit: {teacherClass.CollegeCredit}
          </DialogContentText>
          <DialogContentText>
            Main Teacher: {teacherClass.MainTeacher}
          </DialogContentText>
          <DialogContentText>
            Falcility: {teacherClass.CFalcility}
          </DialogContentText>
          <DialogContentText>
            Building: {teacherClass.CBuilding}
          </DialogContentText>
          <DialogContentText>Room: {teacherClass.CRoom}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => handleClick()}
        startIcon={<ListAlt />}
      >
        Custom TextBook
      </Button>
      <Dialog
        open={open}
        onClose={(e) => handleClick()}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {teacherClass.SubjectName}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Class Id: {teacherClass.ClassId}
          </DialogContentText>
          <DialogContentText>
            Subject Id: {teacherClass.CSubjectId}
          </DialogContentText>
          <DialogContentText>
            Credit: {teacherClass.CollegeCredit}
          </DialogContentText>
          <DialogContentText>
            Main Teacher: {teacherClass.MainTeacher}
          </DialogContentText>
          <DialogContentText>
            Falcility: {teacherClass.CFalcility}
          </DialogContentText>
          <DialogContentText>
            Building: {teacherClass.CBuilding}
          </DialogContentText>
          <DialogContentText>Room: {teacherClass.CRoom}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default ButtonList;
