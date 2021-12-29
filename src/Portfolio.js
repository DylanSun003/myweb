import React, { Component } from "react";
import NavBar from "./component/NavBar";
import TailBar from "./component/TailBar";
import PorBanner from "./component/PorBanner";
import PorShown from "./component/PorShown";
class Portfolio extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <PorBanner />
        <PorShown />
        <TailBar />
      </React.Fragment>
    );
  }
}

export default Portfolio;
