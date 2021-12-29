import React from "react";
import bannerImg from "../image/pawel-czerwinski-G6ez-Kt1XOs.jpg";
import Fade from "react-reveal/Fade";

class Banner extends React.Component {
  render() {
    return (
      <Fade>
        <div className="banner-container">
          <img src={bannerImg} alt="banner-img" className="banner-img" />
          <div>
            <p className="title">HI, I'M DYLAN SUN</p>
            <p className="subtitle">Welcome to my site!</p>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Banner;
