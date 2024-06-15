import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min.js";
import "./index.css";
import { TwitterContextLoginProvider } from "./contextapi/TwitterContextLogin.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TwitterContextLoginProvider>
      <App />
    </TwitterContextLoginProvider>
  </BrowserRouter>
);
