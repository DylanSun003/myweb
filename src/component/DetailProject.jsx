import React, {Component} from "react";
import videoCar from "../image/projectImg/car project/car video.mp4";
import videoGame from "../image/projectImg/game/gamerecording.mov";
import videoSVA from "../image/projectImg/Sorting Algorithm Visualizer/sav video.mov";
import videoMovWeb from "../image/projectImg/movie website/movieApp video.mov";

import ImgCar1 from "../image/projectImg/car project/car1.jpg";
import ImgCar2 from "../image/projectImg/car project/car2.jpg";
import ImgGame1 from "../image/projectImg/game/game1.png";
import ImgGame2 from "../image/projectImg/game/game.png";
import ImgMosh1 from "../image/projectImg/moshify/mos4.png";
import ImgMosh2 from "../image/projectImg/moshify/mos2.png";
import ImgMosh3 from "../image/projectImg/moshify/mos3.png";
import ImgWeb1 from "../image/projectImg/movie website/web3.png";
import ImgWeb2 from "../image/projectImg/movie website/web2.png";
import ImgWeb3 from "../image/projectImg/movie website/web4.png";
import ImgRecepit1 from "../image/projectImg/recepit/rec4.png";
import ImgRecepit2 from "../image/projectImg/recepit/rec2.png";
import ImgRecepit3 from "../image/projectImg/recepit/rec3.png";
import ImgSVA1 from "../image/projectImg/Sorting Algorithm Visualizer/sav1.png";
import ImgSVA2 from "../image/projectImg/Sorting Algorithm Visualizer/sav2.png";
import ImgSVA3 from "../image/projectImg/Sorting Algorithm Visualizer/sav3.png";

import javaLogo from "../image/aboutMe/javalogo.png";
import javaFXLogo from "../image/aboutMe/javafxlogo.png";
import mongoDBLogo from "../image/aboutMe/mongoDBlogo.png";
import mysqlLogo from "../image/aboutMe/mysqlLogo.png";
import jsLogo from "../image/aboutMe/js.png";
import htmlLogo from "../image/aboutMe/html.png";
import cssLogo from "../image/aboutMe/css.png";
import nodejsLogo from "../image/aboutMe/nodelogo.png";
import reactlogo from "../image/aboutMe/reactlogo.png";
import pythonlogo from "../image/aboutMe/pythonlogo.png";
import Clogo from "../image/aboutMe/c-logo.png";
import Energialogo from "../image/aboutMe/Energia.png";
import sklearnLogo from "../image/aboutMe/sklearnlogo.png";
import Fade from "react-reveal/Fade";

let carProject = [{p1: ImgCar1}, {p2: ImgCar2}];
let gameProject = [{p1: ImgGame1}, {p2: ImgGame2}];
let MoshProject = [{p1: ImgMosh1}, {p2: ImgMosh2}, {p3: ImgMosh3}];
let WebProject = [{p1: ImgWeb1}, {p2: ImgWeb2}, {p3: ImgWeb3}];
let RecepitProject = [{p1: ImgRecepit1}, {p2: ImgRecepit2}, {p3: ImgRecepit3}];
let SVAProject = [{p1: ImgSVA1}, {p2: ImgSVA2}, {p3: ImgSVA3}];

let softwareLogo = {
  "C++": Clogo,
  Energia: Energialogo,
  Python: pythonlogo,
  HTML: htmlLogo,
  CSS: cssLogo,
  Javascript: jsLogo,
  "Node.js": nodejsLogo,
  MongoDB: mongoDBLogo,
  React: reactlogo,
  Java: javaLogo,
  JavaFX: javaFXLogo,
};

let projects = [
  {
    "TI-RSLK Robotic Car": {
      imgArray: carProject,
      softwareUsed: ["C++", "Energia"],
      description:
        "Line Follower is a program written in C++ that allows the TI-RSLK robotic car to follow a black line over a track. As per the project requirements, once the car sees a horizontal line at the end of the track, it completes a 180 degree turn then repeats the track backwards before stopping back at the beginning.",
      smallText: "C++ project with car",
    },
  },
  {
    "Guardians-of-the-Galaxy": {
      imgArray: gameProject,
      softwareUsed: ["Python"],
      description:
        "Built by Python language with Pygame libary. The flying spaceship can shoot and move to hit the fallen aerolite. When an aerolite hitted by the missile, there are opportunity to get shell and extra missles for couple seconds.",
      smallText: "A flying game built by Python",
    },
  },
  {
    "Moshify App": {
      imgArray: MoshProject,
      softwareUsed: ["HTML", "CSS", "Javascript", "Node.js", "React"],
      description: "Small web application to sell cloud service to constomer, with plan shown, review from other customers",
      smallText: "Small sell web app built by JS",
    },
  },
  {
    "Movie Rental App": {
      imgArray: WebProject,
      softwareUsed: ["HTML", "CSS", "Javascript", "Node.js", "MongoDB", "React"],
      description:
        "Built by Javascript, HTML, CSS and React as frontend, and used Node.js to build the backend with MongoDB as the RESTapi. Allowing user to search by movie name and filter the movie based on the type. Having a slice show kind interface to improve readability",
      smallText: "A movie rental web app",
    },
  },
  {
    "Recipe App": {
      imgArray: RecepitProject,
      softwareUsed: ["HTML", "CSS", "Javascript", "Node.js", "MongoDB", "React"],
      description:
        "I was in charged of the fontend for the project. This app allows user to sign in (login) with the Google account, then the user can create and share his own recipe for a dishes including the procedure to prepare the dishes, what the ingredients are needed. Besides sharing own recipe, users can view others recipe by the other users and making comment on them.",
      smallText: "A team project web app",
    },
  },
  {
    "Sorting Algorithm Visualizer": {
      imgArray: SVAProject,
      softwareUsed: ["Java", "JavaFX"],
      description:
        "With animation and GUI design built with JavaFx platform aided to help students to visualize some common sorting algorithms such as quick sort, Merge sort, and Bubble sort, etc, to solidify their understanding of the sorting technique and how they work.",
      smallText: "Visualizing how sorting algorithm works",
    },
  },
];

class DetailProject extends React.Component {
  state = {
    currentProject: {
      name: "",
      genre: {
        name: "",
      },
      currentDetail: "",
      currentImgArray: "",
      smallText: "",
      description: "",
    },
  };

  async componentWillMount() {
    let {projectTitle} = this.props;
    let currentProject = projects.find((ele) => Object.keys(ele) == projectTitle);
    let {imgArray, smallText, description} = currentProject[projectTitle];
    this.setState({
      currentProject: {name: projectTitle},
      currentDetail: imgArray[0],
      currentImgArray: imgArray,
      smallText: smallText,
      description: description,
    });
  }

  handleSelect = (selected) => {
    if (this.state.currentDetail != selected) {
      this.setState({
        currentDetail: selected,
      });
    }
  };

  getImgOrVideo = () => {
    const {name} = this.state.currentProject;
    const {currentDetail} = this.state;
    if (name == "TI-RSLK Robotic Car" && Object.keys(currentDetail) == "p2")
      return <video src={videoCar} width="70%" height="500px" controls="controls" autoPlay={false} />;
    else if (name == "Guardians-of-the-Galaxy" && Object.keys(currentDetail) == "p2")
      return <video src={videoGame} width="70%" height="500px" controls="controls" autoPlay={false} />;
    else if (name == "Sorting Algorithm Visualizer" && Object.keys(currentDetail) == "p3")
      return <video src={videoSVA} width="70%" height="500px" controls="controls" autoPlay={false} />;
    else if (name == "Movie Rental App" && Object.keys(currentDetail) == "p3")
      return <video src={videoMovWeb} width="70%" height="500px" controls="controls" autoPlay={false} />;
    else return <img src={currentDetail[Object.keys(currentDetail)]} alt="currentP" className="currentP" />;
  };

  getborder = (imgElement) => {
    if (imgElement == this.state.currentDetail) return "3px solid #157aff";
    else return null;
  };

  render() {
    let projectTitle = this.state.currentProject.name;
    let imgArray = this.state.currentImgArray;
    let description = this.state.description;
    let smallText = this.state.smallText;

    let {softwareUsed} = projects.find((ele) => Object.keys(ele) == projectTitle)[projectTitle];

    return (
      <div className="parent">
        <Fade left>
          <div className="div1">
            <h1>{projectTitle}</h1>
            <p>{smallText}</p>
            {imgArray.map((imgElement) => (
              <img
                src={imgElement[Object.keys(imgElement)]}
                alt="p1"
                className="sm-img"
                style={{border: this.getborder(imgElement)}}
                onClick={() => this.handleSelect(imgElement)}
              />
            ))}
          </div>
        </Fade>
        <Fade>
          <div className="div2">
            {this.getImgOrVideo()}
            <p>{description}</p>
          </div>
        </Fade>
        <Fade right>
          <div className="div3">
            <h3>Software Used</h3>
            <div className="logo-cluster">
              {softwareUsed.map((s) => (
                <img src={softwareLogo[s]} alt="soft1" />
              ))}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default DetailProject;
