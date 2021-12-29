import React, { PureComponent } from "react";
import { NavLink } from "react-router-dom";

class Card extends React.Component {
  render() {
    const { imgUrl, title, dec } = this.props;
    return (
      <NavLink
        className="nav-item"
        to={{ pathname: `/portfolio/${title}/`, userProps: { imgUrl } }}
      >
        <div className="card">
          <img src={imgUrl} className="card-img-top" alt="dasd" />
          <div className="card-body">
            <p className="card-t">{title}</p>
            <p className="card-text">{dec}</p>
          </div>
        </div>
      </NavLink>
    );
  }
}

export default Card;
