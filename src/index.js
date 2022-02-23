import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { provider } from "react-redux";
import storeFactory from "./Redux/store";

ReactDOM.render(
  <React.StrictMode>
    <provider store={storeFactory()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </provider>
  </React.StrictMode>,
  document.getElementById("root")
);
