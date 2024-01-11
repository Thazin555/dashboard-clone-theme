import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GeneralContextProvider from "./contexts/GeneralContext.jsx";
import "../node_modules/flowbite/dist/flowbite.min.js";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GeneralContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </GeneralContextProvider>
);
