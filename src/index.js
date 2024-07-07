import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./index.css";
import Tagline1 from "./Components/Tagline1";
import Tagline2 from "./Components/Tagline2";
import refimg from "./images/refimg.jpg";
import Headline from "./Components/Headline";
import Madol from "./Components/Madol";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Headline />
    <img className="ReferImg leftSide box" src={refimg} alt="referal img" />
    <span>
      <Tagline1 className="rightSide box" />
    </span>
    <Tagline2 className="rightSide box" />
    <Madol />
  </React.StrictMode>
);
