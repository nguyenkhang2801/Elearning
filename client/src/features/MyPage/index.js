import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Axios from "axios";

MyPage.propTypes = {};

let id = localStorage.getItem("id");

function MyPage(props) {
  const [studentClassInfo, setStudentClassInfo] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/getstudentclass?id=${id}`).then(
      (response) => {
        setStudentClassInfo(response.data); //okay
      }
    );
  }, [studentClassInfo]);

  return <div></div>;
}

export default MyPage;
