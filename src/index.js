import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "animate.css";
import RouteSwitch from "./RouteSwitch";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RouteSwitch />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
