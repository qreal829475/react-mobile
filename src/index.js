import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "mobx-react";
import "./index.css";
import App from "./App";
import store from "./store/index";
import { A, B } from "./pages/index";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider {...store}>
    <React.StrictMode>
      <Router>
        <Route path="/" component={App}>
          <Route path="/" component={A} />
          <Route path="/a" component={A} />
          <Route path="/b" component={B} />
        </Route>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
