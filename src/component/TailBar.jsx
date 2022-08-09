import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import github from "../image/github.png";
import linkin from "../image/linkin.png";
import facebook from "../image/facebook.png";
import top from "../image/halfpic.png";

import "../css/styles.css";

const TailBar = () => {
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };
  return (
    <div className="tail">
      <img src={top} alt="" className="top" onClick={scrollToTop} />

      <NavLink className="nav-tail-item" to="/">
        © 2022 Dylan Sun
      </NavLink>
      <div className="logo-block">
        <NavLink className="nav-tail-item" to={{pathname: "https://github.com/DylanSun003/"}} target="_blank">
          <img src={github} alt="githublogo" className="github-logo" />
        </NavLink>
        <NavLink className="nav-tail-item" to={{pathname: "https://linkedin.com/in/zhenrong-sun-a7008414a"}} target="_blank">
          <img src={linkin} alt="linkin" className="github-logo" />
        </NavLink>
        <NavLink className="nav-tail-item" to={{pathname: "https://www.facebook.com/"}} target="_blank">
          <img src={facebook} alt="linkin" className="github-logo" />
        </NavLink>
      </div>
    </div>
  );
};

export default TailBar;
