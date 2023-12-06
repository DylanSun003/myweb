import React, {Component} from "react";
import videoCar from "../image/projectImg/car project/car video.mp4";
import videoGame from "../image/projectImg/game/gamerecording.mov";
import videoSVA from "../image/projectImg/Sorting Algorithm Visualizer/sav video.mov";
import videoMovWeb from "../image/projectImg/movie website/movieApp video.mov";
import videoReddLab from "../image/projectImg/reddlab/reddlabVideo.mov";


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
import ImgRedDLabs1 from "../image/projectImg/reddlab/reddlab1.jpg"
import ImgRedDLabs2 from "../image/projectImg/reddlab/reddlab2.jpg"
import ImgRedDLabs3 from "../image/projectImg/reddlab/reddlab3.jpg"


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
let reddLabsProject = [{p1: ImgRedDLabs1}, {p2: ImgRedDLabs2}, {p3: ImgRedDLabs3}];

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
      description: "The Line Follower is an adeptly crafted C++ program tailored for the TI-RSLK robotic car, enabling it to precisely track and follow a black line laid out on a course. In alignment with the project's specifications, this intelligent system is designed to recognize a horizontal line signaling the end of the track. Upon detection, it skillfully executes a 180-degree turn to navigate the circuit in reverse, ensuring the car retraces its path back to the starting point before coming to a halt.",
      smallText: "C++ project with car",
    },
  },
  {
    "Guardians-of-the-Galaxy": {
      imgArray: gameProject,
      softwareUsed: ["Python"],
      description: "Developed in Python and utilizing the Pygame library, this interactive game features a nimble spaceship that soars through the cosmos, capable of firing at descending aerolites. Each successful strike not only shatters the target but also grants the player a chance to acquire additional shells and a temporary boost in missile firepower, adding layers of strategy and excitement to the gameplay experience.",
      smallText: "A flying game built by Python",
    },
  },
  {
    "Moshify App": {
      imgArray: MoshProject,
      softwareUsed: ["HTML", "CSS", "Javascript", "Node.js", "React"],
      description: "This streamlined web application is designed to facilitate the sale of cloud services to customers. It thoughtfully presents various service plans and integrates a review system that features authentic feedback from existing customers, enhancing transparency and trust.",
      smallText: "Small sell web app built by JS",
    },
  },
  {
    "Movie Rental App": {
      imgArray: WebProject,
      softwareUsed: ["HTML", "CSS", "Javascript", "Node.js", "MongoDB", "React"],
      description: "Crafted using JavaScript, HTML, CSS, and React, this application features a sleek front-end interface, complemented by a robust Node.js backend. It leverages MongoDB to provide RESTful API services. The application offers users the ability to search for movies by title and apply filters based on genre. It boasts a carousel-style display that enhances user readability and interaction, presenting an engaging and intuitive user experience.",
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
  {
    "REDD Labs Web": {
      imgArray: reddLabsProject,
      softwareUsed: ["HTML", "CSS", "Javascript", "Node.js", "React"],
      description: "Orchestrated and engineered a dynamic website that showcases RedD Lab's strategic vision and milestones, effectively establishing the company's digital presence. Leveraged a modern tech stack including JavaScript, React, HTML, CSS, and Node.js to create an engaging and responsive online platform.",
      smallText: "REDD Labs - TamagoX",
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
    else if (name == "REDD Labs Web" && Object.keys(currentDetail) == "p3")
      return <video src={videoReddLab} width="70%" height="500px" controls="controls" autoPlay={false} />;
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
