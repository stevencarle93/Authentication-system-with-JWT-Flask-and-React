//Import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//Include your index.scss file into the bundle
import "../styles/index.css";

//Import your own components
import Layout from "./layout";

//Render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
