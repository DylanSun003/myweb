import React, { Component } from "react";
import Card from "./Card";
import Fade from "react-reveal/Fade";
import gameImg from "../image/projectImg/game/game1.png";
import carImg from "../image/projectImg/car project/car.jpeg";
import movieImg from "../image/projectImg/movie website/web1.png";
import reddlabImg from "../image/projectImg/reddlab/reddlab1.jpg";

let imgArray = [
  // {
  //   "Guardians-of-the-Galaxy": {
  //     img: gameImg,
  //     dec: "Built by Python language with Pygame libary. The flying spaceship can shoot and move to hit the fallen aerolite. When an aerolite hitted by the missile, there are opportunity to get shell and extra missles for couple seconds.",
  //   },
  // },
  {
    "REDD Labs Web": {
      img: reddlabImg,
      dec: "Orchestrated and engineered a dynamic website that showcases RedD Lab's strategic vision and milestones, effectively establishing the company's digital presence. Leveraged a modern tech stack including JavaScript, React, HTML, CSS, and Node.js to create an engaging and responsive online platform.",
    },
  },
  {
    "TI-RSLK Robotic Car": {
      img: carImg,
      dec: "Line Follower is a program written in C++ that allows the TI-RSLK robotic car to follow a black line over a track. As per the project requirements, once the car sees a horizontal line at the end of the track, it completes a 180 degree turn then repeats the track backwards before stopping back at the beginning.",
    },
  },
  {
    "Movie Rental App": {
      img: movieImg,
      dec: "Built by Javascript, HTML, CSS and React as frontend, and used Node.js to build the backend with MongoDB as the RESTapi. Allowing user to search by movie name and filter the movie based on the type. Having a slice show kind interface to improve readability",
    },
  },
];

class RecentProjectGrid extends React.Component {
  render() {
    return (
      <Fade left>
        <div className="grid">
          <p>SOME OF MY RECENT PROJECTS</p>

          <div
            className="row row-cols-1 row-cols-md-3 g-4"
            style={{ width: "100vw" }}
          >
            {imgArray.map((element) => (
              <div className="col">
                <Card
                  imgUrl={element[Object.keys(element)]["img"]}
                  title={Object.keys(element)}
                  dec={element[Object.keys(element)]["dec"]}
                />
              </div>
            ))}
          </div>
        </div>
      </Fade>
    );
  }
}

export default RecentProjectGrid;
