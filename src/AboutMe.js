import React from "react";
import NavBar from "./component/NavBar";
import AboutBanner from "./component/AboutBanner";
import TailBar from "./component/TailBar";
import Fade from "react-reveal/Fade";

function AboutMe() {
  return (
    <Fade>
      <React.Fragment>
        <NavBar />
        <AboutBanner />
        <TailBar />
      </React.Fragment>
    </Fade>
  );
}

export default AboutMe;
