import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CategoryProvider } from "./Context";

ReactDOM.render(
  <CategoryProvider>
    <App />
  </CategoryProvider>,
  document.getElementById("root")
);
