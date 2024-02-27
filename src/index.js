import React from "react";
import ReactDOM from "react-dom/client";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

 
import "./index.css";
import App from "./App";
import TokenContextProvider from "./Context/TokenContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  
  <TokenContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TokenContextProvider>
);
