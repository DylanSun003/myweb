import React, {Component} from "react";
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
import javaLogo from "../image/aboutMe/javalogo.png";
import Clogo from "../image/aboutMe/c-logo.png";
import scalaLogo from "../image/aboutMe/scalaLogo.png";
import sparkLogo from "../image/aboutMe/ApacheSparkLogo.png";


class AboutBanner extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="containerBanner containerBanner_solid">
            <div className="title_wrapper">
              <h1>About me</h1>
            </div>
          </div>
          <div className="containerBanner containerBanner_image" aria-hidden="true">
            <div className="title_wrapper">
              <h1>Dylan Sun</h1>
            </div>
          </div>
        </header>
        <Fade left>
          <section className="info-person">
            <h2>Personality</h2>
            <p>
              In study, I am a hard working, modest and humble person with strong self-learning ability. Additionally, I am outgoing, optimistic,
              responsible and good at communicating with others. I love teamworking with other.
            </p>
            <h2>Educational Background</h2>
            <p>After three fulfilling years at community college, I earned the opportunity to transfer to UCLA, a university I had long admired. 
              This transition marked a significant step in my educational journey, offering a chance to immerse myself in a rigorous academic environment and expand my horizons. 
              Driven by an innate curiosity, I delved into Machine Learning and Web Application development during a summer break, captivated by their profound capabilities. 
              The prospect of harnessing technology to draw insights from past data and vividly present them through web interfaces was thrilling. 
              At UCLA, my enthusiasm for these innovative fields grew. I pursued a focused curriculum in data science and web development, keen to deepen my understanding and prepare for a future where I could contribute to the industry with these cutting-edge tools.</p>
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
              <img src={javaLogo} alt="j" />
              <img src={Clogo} alt="k" />
              <img src={scalaLogo} alt="l" />
              <img src={sparkLogo} alt="m" />

            </div>
          </section>
        </Fade>
      </div>
    );
  }
}

export default AboutBanner;
