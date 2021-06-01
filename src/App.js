import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import ReactGA from "react-ga";
const TRACKING_ID = "UA-198435162-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
