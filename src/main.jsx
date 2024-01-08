import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GeneralContextProvider from "./contexts/GeneralContext.jsx";
import "../node_modules/flowbite/dist/flowbite.min.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GeneralContextProvider>
    <App />
  </GeneralContextProvider>
);
