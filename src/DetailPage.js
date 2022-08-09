import React from "react";
import NavBar from "./component/NavBar";
import DetailProject from "./component/DetailProject";
import TailBar from "./component/TailBar";

class DetailPage extends React.Component {
  state = {
    project: {
      name: "",
      genre: {
        name: "",
      },
      imgUrl: "",
    },
  };

  async componentWillMount() {
    let projectName = this.props.match.params.title;
    let projectImgUrl = this.props.location.userProps.imgUrl;
    this.setState({
      project: {
        name: projectName,
      },
      imgUrl: projectImgUrl,
    });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <DetailProject projectTitle={this.state.project.name} imgUrl={this.state.imgUrl} />
        <TailBar />
      </React.Fragment>
    );
  }
}

export default DetailPage;
