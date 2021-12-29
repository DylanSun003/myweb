import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import mongoDBLogo from "../image/aboutMe/mongoDBlogo.png";
import mysqlLogo from "../image/aboutMe/mysqlLogo.png";
import jsLogo from "../image/aboutMe/js.png";
import htmlLogo from "../image/aboutMe/html.png";
import cssLogo from "../image/aboutMe/css.png";
import nodejsLogo from "../image/aboutMe/nodelogo.png";
import reactlogo from "../image/aboutMe/reactlogo.png";
import pythonlogo from "../image/aboutMe/pythonlogo.png";
import sklearnLogo from "../image/aboutMe/sklearnlogo.png";

class AboutBanner extends React.Component {
  render() {
    return (
      <div>
        <header>
          {/* <!-- First containerBanner --> */}
          <div className="containerBanner containerBanner_solid">
            <div className="title_wrapper">
              <h1>About me</h1>
            </div>
          </div>

          {/* <!-- Second containerBanner --> */}
          <div
            className="containerBanner containerBanner_image"
            aria-hidden="true"
          >
            <div className="title_wrapper">
              <h1>Dylan Sun</h1>
            </div>
          </div>
        </header>
        <Fade left>
          <section className="info-person">
            <h2>Personality</h2>
            <p>
              In study, I am a hard working, modest and humble person with
              strong self-learning ability. Additionally, I am outgoing,
              optimistic, responsible and good at communicating with others. I
              love teamworking with other.
            </p>
            <h2>Educational Background</h2>
            <p>
              During almost 3 years study in community college, I finally
              transferred to my dream school, UCLA. For me, having the chance to
              study in one of the top schools worldwide is another important
              journey to pursue higher education, and gain knowledge and
              exprience that helps to broaden my vision. Due to curiosity about
              Machine Learning, Web Application, in one of the summer, I tried
              to self study ML and Web App. Later, I was deeply attracted by the
              beauty of these fields because they are so powerful so that people
              can use the technology to predict the future and unknown based on
              the "history" and show the result with UI on web application.
              Therefore, once I transferred to UCLA, I was eager to know more
              about these fields, so I took more data science courses and web
              development courses and hope to get a chance to work in the
              industry in the future career.
            </p>
            <h2>Technology I Use</h2>
            <div className="logo-cluster">
              <img className="jslogo1" src={jsLogo} alt="a" />
              <img className="jslogo" src={htmlLogo} alt="b" />
              <img className="jslogo" src={cssLogo} alt="c" />
              <img src={nodejsLogo} alt="d" />
              <img src={reactlogo} alt="e" />

              <img src={mongoDBLogo} alt="f" />
              <img src={mysqlLogo} alt="g" />
              <img src={pythonlogo} alt="h" />
              <img src={sklearnLogo} alt="i" />
            </div>
          </section>
        </Fade>
      </div>
    );
  }
}

export default AboutBanner;
