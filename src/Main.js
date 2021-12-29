import "./css/styles.css";
import NavBar from "./component/NavBar";
import TailBar from "./component/TailBar";
import React from "react";
import Banner from "./component/Banner";
import RecentProjectGrid from "./component/RecentProjectGrid";
import Fade from "react-reveal/Fade";

class Main extends React.Component {
  render() {
    return (
      <Fade>
        <React.Fragment>
          <NavBar />
          <Banner />
          <RecentProjectGrid />
          <TailBar />
        </React.Fragment>
      </Fade>
    );
  }
}

export default Main;
