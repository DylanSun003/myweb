import React, { PureComponent } from "react";
import im1 from "../image/1.jpeg";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";

class EachProject extends React.Component {
  render() {
    const { imgUrl, title } = this.props;

    return (
      <Fade>
        <NavLink
          className="nav-item"
          to={{ pathname: `/portfolio/${title}/`, userProps: { imgUrl } }}
        >
          <div
            className="project-card"
            style={{ backgroundImage: `url(${imgUrl})` }}
          >
            <p className="card-title">{title}</p>
            <button type="button" class="btn btn-outline-light">
              LEARN MORE
            </button>
          </div>
        </NavLink>
      </Fade>
    );
  }
}

export default EachProject;
