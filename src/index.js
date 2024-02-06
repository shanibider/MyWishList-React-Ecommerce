import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


// Etry point of the application. Imports the App component and renders it inside a React.StrictMode component. 
// React.StrictMode is a wrapper component that checks for potential problems in an application during development.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
