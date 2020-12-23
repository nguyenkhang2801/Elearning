import React, { useState } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./features/StudentPage/Home";
import MyPage from "./features/StudentPage/MyPage";
import MyInfo from "./features/StudentPage/MyInfo";
import Register from "./features/StudentPage/Register";
import NotFound from "./components/NotFound";

import MyInfoTeacher from "./features/TeacherPage/MyInfoTeacher";
import MyPageTeacher from "./features/TeacherPage/MyPageTeacher";

import { Switch as Sw } from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Login from "./components/Login";
import HeaderTeacher from "./components/HeaderTeacher";

function App() {
  const [state, setState] = React.useState({
    student: false,
    teacher: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  let [userRole, setUserRole] = useState(localStorage.getItem("role"));
  let [userId, setUserId] = useState(localStorage.getItem("id"));
  if (100 <= userId && userId <= 999) {
    localStorage.setItem("role", "teacher");
  } else {
    localStorage.setItem("role", "student");
  }

  return (
    <>
      <>{!userId && <Login />}</>
      {
        <>
          {userRole === "student" && <Header />}
          {userRole === "teacher" && <HeaderTeacher />}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/mypage" component={MyPage} />
            <Route path="/mypageTeacher" component={MyPageTeacher} />
            <Route path="/register" component={Register} />
            <Route path="/myinfo" component={MyInfo} />
            <Route path="/MyInfoTeacher" component={MyInfoTeacher} />
            <Route component={NotFound} />
          </Switch>

          <div style={{ textAlign: "center" }}>Created by TEAM 1 with ❤️</div>
        </>
      }
    </>
  );
}

export default App;
