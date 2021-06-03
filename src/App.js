import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";
// import ReactGA from "react-ga";
// const TRACKING_ID = "UA-198435162-1";
// ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
