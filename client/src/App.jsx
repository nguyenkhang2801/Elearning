import React from 'react'
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./features/Home";
import MyPage from "./features/MyPage";
import MyInfo from "./features/MyInfo";
import Register from "./features/Register";
import NotFound from "./components/NotFound";

import MyInfoTeacher from "./features/MyInfoTeacher";
import MyPageTeacher from "./features/MyPageTeacher";

import {Switch as Sw} from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function App() {
  const [state, setState] = React.useState({
    student: false,
    teacher: false
  });
  
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <>
        <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              control={<Sw checked={state.student} onChange={handleChange} name="student" />}
              label="student"
            />
            <FormControlLabel
              control={<Sw checked={state.teacher} color='primary' onChange={handleChange} name="teacher" />}
              label="teacher"
            />
          </FormGroup>
        </FormControl>
      </>
      {
        // (state.student || state.teacher) &&
      <>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mypage" component={MyPage} />
          <Route path="/mypageTeacher" component={MyPageTeacher} />
          <Route path="/register" component={Register} />
          <Route path="/myinfo" component={MyInfo} />
          <Route path="/MyInfoTeacher" component={MyInfoTeacher} />
          <Route component={NotFound} />
        </Switch>

        <div style={{ textAlign: "center" }}>Created by leo with ❤️</div>
      </>}
    </>
  );
}

export default App;
