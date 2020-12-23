import React, { useState } from "react";
import Axios from "axios";
import TableStudent from "./TableStudent";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";
import { ListAlt } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function ButtonList(props) {
  const { teacherClass } = props;
  const roomDetail = teacherClass;

  const [openStudentList, setOpenStudentList] = useState(false);
  const [openRoomDetail, setOpenRoomDetail] = useState(false);
  const [openTextBook, setOpenTextBook] = useState(false);

  const [studentList, setStudentList] = useState([]);
  const [textBookList, setTextBookList] = useState([]);

  const classes = useStyles();

  const handleClose = (name) => {
    switch (name) {
      case "StudentList":
        setOpenStudentList(false);
        break;
      case "RoomDetail":
        setOpenRoomDetail(false);
        break;
      case "TextBook":
        setOpenTextBook(false);
        break;
      default:
        break;
    }
  };

  function handleStudentList() {
    setOpenStudentList(!openStudentList);
    Axios.get(
      `http://localhost:3001/api/getstudentofaclass?id=${teacherClass.ClassId}`
    ).then((response) => {
      setStudentList(response.data);
      console.log(response); //okay
    });
  }

  function handleRoomDetail() {
    setOpenRoomDetail(!openRoomDetail);
  }

  function handleTextBook() {
    setOpenTextBook(!openTextBook);
    Axios.get(
      `http://localhost:3001/api/gettextbook?subjectId=${teacherClass.CSubjectId}`
    ).then((response) => {
      console.log("book: ", response.data);
      setTextBookList(response.data); //okay
    });
  }

  function renderRoomDetail() {
    return (
      <Box>
        <DialogContentText>Class Id: {roomDetail.ClassId}</DialogContentText>
        <DialogContentText>
          Subject Id: {roomDetail.CSubjectId}
        </DialogContentText>
        <DialogContentText>
          Numbers of Student: {roomDetail.NumberOfStudent}
        </DialogContentText>
        <DialogContentText>
          Main Teacher: {roomDetail.MainTeacher}
        </DialogContentText>
        <DialogContentText>
          Falcility: {roomDetail.CFalcility}
        </DialogContentText>
        <DialogContentText>
          Room: {roomDetail.CRoom}
          {roomDetail.CBuilding}
        </DialogContentText>
      </Box>
    );
  }

  function renderTextBook(book) {
    return (
      <Box>
        <DialogContentText>Subject Id: {book.UseSubjectId}</DialogContentText>
        <DialogContentText>TextBook Id: {book.UseTextBookId}</DialogContentText>
        <DialogContentText>
          TextBook Name: {book.TextBookName}
        </DialogContentText>
        <DialogContentText>Released: {book.YearOfRelease}</DialogContentText>
      </Box>
    );
  }

  return (
    <Box>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginRight: 20 }}
        onClick={(e) => handleStudentList()}
        startIcon={<ListAlt />}
      >
        Student List
      </Button>
      <Dialog
        open={openStudentList}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth={"lg"}
      >
        <DialogTitle id="form-dialog-title">Student List</DialogTitle>
        <DialogContent>
          {<TableStudent studentList={studentList} />}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose("StudentList")} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Button
        variant="contained"
        color="secondary"
        style={{ marginRight: 20 }}
        onClick={(e) => handleRoomDetail()}
        startIcon={<ListAlt />}
      >
        Room Detail
      </Button>
      <Dialog
        open={openRoomDetail}
        onClose={(e) => handleClose("RoomDetail")}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth={"xs"}
      >
        <DialogTitle id="form-dialog-title">
          {teacherClass.SubjectName}
        </DialogTitle>
        <DialogContent>{renderRoomDetail()}</DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose("RoomDetail")} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => handleTextBook()}
        startIcon={<ListAlt />}
      >
        Custom TextBook
      </Button>
      <Dialog
        open={openTextBook}
        onClose={(e) => handleClose("TextBook")}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {teacherClass.SubjectName}
        </DialogTitle>
        <DialogContent>
          {textBookList.map((book) => renderTextBook(book))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose("TextBook")} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default ButtonList;
