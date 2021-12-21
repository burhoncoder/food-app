import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";

import "./assets/styles/main/reset.css";
import "./assets/styles/main/main.css";
import "./assets/styles/main/responsive.css";

import { App } from "./App.jsx";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,

  document.getElementById("root")
);
