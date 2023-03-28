import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";



import "jquery/dist/jquery";
import "popper.js/dist/popper";
import "bootstrap/dist/js/bootstrap";

import "./global.css";
import App from "./App";

createRoot(document.querySelector("#root")).render(<App />);


//yarn add jquery
//yarn add @popperjs/core
//yarn add bootstrap
//yarn add axios
//yarn add react-toastify
//yarn add moment
//yarn add react-moment
//yarn add react-router-dom@latest
