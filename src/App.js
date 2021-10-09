import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import MannyPacquiao from "./components/MannyPacquiao";
import PingLacson from "./components/PingLacson";
import BongBongMarcos from "./components/BongBongMarcos";
import LeniRobredo from "./components/LeniRobredo";
import BatoDelaRosa from "./components/BatoDelaRosa";
import TitoSotto from "./components/TitoSotto";
import BongGo from "./components/BongGo";
import KikoPangilinan from "./components/KikoPangilinan";
import "./styles/App.css";

const Home = () => {
  return <Redirect to="/manny-pacquiao" />;
};

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/manny-pacquiao" component={MannyPacquiao} />
          <Route exact path="/ping-lacson" component={PingLacson} />
          <Route exact path="/bongbong-marcos" component={BongBongMarcos} />
          <Route exact path="/leni-robredo" component={LeniRobredo} />
          <Route exact path="/bato-delarosa" component={BatoDelaRosa} />
          <Route exact path="/tito-sotto" component={TitoSotto} />
          <Route exact path="/bong-go" component={BongGo} />
          <Route exact path="/kiko-pangilinan" component={KikoPangilinan} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
