import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import logo from "../image/utils/Picturelogo.png";
import "../css/styles.css";
import Fade from "react-reveal/Fade";

const NavBar = (props) => {
  return (
    <Fade top>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-0 mt-50">
        <div className="navbar-nav container-fluid">
          <NavLink className="nav-item" to="/">
            <img src={logo} alt="logo" width="70" className="logo" />
          </NavLink>
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/about-me">
              About me
            </NavLink>
            <NavLink className="nav-link" to="/portfolio">
              Portfolio
            </NavLink>
          </div>
        </div>
      </nav>
    </Fade>
  );
};

export default NavBar;
