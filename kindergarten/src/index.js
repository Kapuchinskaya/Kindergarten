import React from "react";
import ReactDOM from "react-dom";
import "./Resources/css/App.css";
import Routes from "./routes";
import "./Resources/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/js/src/collapse.js";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
