import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./features/Home";
import MyPage from "./features/MyPage";
import MyInfo from "./features/MyInfo";
import Register from "./features/Register";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/register" component={Register} />
        <Route path="/myinfo" component={MyInfo} />
        <Route component={NotFound} />
      </Switch>

      <div style={{ textAlign: "center" }}>Created by leo with ❤️</div>
    </div>
  );
}

export default App;
