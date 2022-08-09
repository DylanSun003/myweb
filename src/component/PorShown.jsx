import React, {Component} from "react";
import EachProject from "./EachProject";
import gameImg from "../image/projectImg/game/game1.png";
import carImg from "../image/projectImg/car project/car.jpeg";
import movieImg from "../image/projectImg/movie website/web1.png";
import recipeImg from "../image/projectImg/recepit/rec1.png";
import mosImg from "../image/projectImg/moshify/mos1.png";
import savImg from "../image/projectImg/Sorting Algorithm Visualizer/sav.png";

let imgArray = [
  {"Guardians-of-the-Galaxy": gameImg},
  {"TI-RSLK Robotic Car": carImg},
  {"Movie Rental App": movieImg},
  {"Recipe App": recipeImg},
  {"Moshify App": mosImg},
  {"Sorting Algorithm Visualizer": savImg},
];

class PorShown extends React.Component {
  render() {
    return (
      <div className="grid">
        <div>
          <p className="ifo-porshow">LEARN MORE ABOUT THE PROJECTS.</p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4" style={{width: "100vw"}}>
          {imgArray.map((element) => (
            <div className="col">
              <EachProject imgUrl={element[Object.keys(element)]} title={Object.keys(element)} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PorShown;
