import React from "react";
import "./projects.css";
import Title from "../title/Title";
import Boxdata from "./Box-data/boxdata.jsx";
// import { DiRequirejs } from "react-icons/di";
// import Ai from "../images/ai.jpg";
const projects = () => {

  return (
    <>
      <div className="pcontainer" id="MyProjects">
        <Title first="Kindly Review" second="MY PROJECTS " third="!!" />
        <div className="main">
          <div className="pcontent">
            {/* --------------------------------------------------------- */}
            <Boxdata title="TO DO LIST" url = "https://github.com/arpitsha25" image={require('../images/ml.jpg')} />
            <Boxdata title="PORTFOLIO" url = "https://github.com/arpitsha25" image={require('../images/ai.jpg')} />
            <Boxdata title="WEATHER REPORT" codeurl = "https://github.com/arpitsha25/weather_app" demourl = "https://arpitsha25.github.io/weather_app/"image={require('../images/weather.jpg')} />
            <Boxdata title="MOVIE LIST" url = "https://github.com/arpitsha25" image={require('../images/tech.jpg')} />
          </div>
        </div>
      </div>
    </>
  );
};

export default projects;
