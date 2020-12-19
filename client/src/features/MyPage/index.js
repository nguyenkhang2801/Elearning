import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Axios from "axios";

MyPage.propTypes = {};

let id = localStorage.getItem("id");

function MyPage(props) {
  const [studentSubject, setStudentSubject] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/getstudentsubject?id=${id}`).then(
      (response) => {
        setStudentSubject(response.data);
      }
    );
  }, [studentSubject]);

  return <div>My Page</div>;
}

export default MyPage;
