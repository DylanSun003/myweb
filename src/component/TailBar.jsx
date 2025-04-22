import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import github from "../image/utils/github.png";
import linkin from "../image/utils/linkin.png";
import facebook from "../image/utils/facebook.png";
import top from "../image/utils/halfpic.png";

import "../css/styles.css";

const TailBar = () => {
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  };
  return (
    <div className="tail">
      <img src={top} alt="" className="top" onClick={scrollToTop} />

      <NavLink className="nav-tail-item" to="/">
          © {new Date().getFullYear()} Dylan Sun
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
