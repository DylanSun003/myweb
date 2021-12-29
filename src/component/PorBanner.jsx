import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class PorBanner extends React.Component {
  state = {
    width: 0,
    height: 0,
    moveX: "",
    moveY: "",
  };
  updateWidndowDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  componentDidMount() {
    this.updateWidndowDimensions();
    window.addEventListener("resize", this.updateWidndowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidndowDimensions);
  }

  handleMouseMove = (e) => {
    const { width, height } = this.state;
    this.setState({
      moveX: (width / 2 - e.nativeEvent.clientX) * 0.1 + "px",
      moveY: (height / 2 - e.nativeEvent.clientY) * 0.1 + "px",
    });
  };

  render() {
    const { moveX, moveY } = this.state;
    let translate = `translate(${moveX}, ${moveY}) scale(1.1)`;
    return (
      <div className="bg-Frame">
        <div
          className="bg"
          onMouseMove={this.handleMouseMove}
          style={{
            "-webit-transform": translate,
            "-moz-transform": translate,
            transform: translate,
          }}
        >
          <Fade>
            <h1>DISCOVER MY PROJECTS</h1>
          </Fade>
        </div>
      </div>
    );
  }
}

export default PorBanner;
