import React from "react";
import "./Intro.css";
import me from "../images/me.png";
// import { BsCloudMoonFill } from "react-icons/bs";
// import { IoPartlySunny } from "react-icons/io5";
// import Mode from "../Modes/mode";

import MyCV from '../ACV.pdf'
const Intro = () => {
  return (
    <>
      <div className="container" id="Intro">
        {/* <div className="toggle">

          <div className="toggle_icon">
            <h3>
              <IoPartlySunny />
            </h3>
          </div>
        </div> */}
        {/* <Mode/> */}
        <div className="box1">
          <div className="box1content">
            <h4>Hello, I am</h4>
            <h1>Arpit Sharma</h1>
            <h4>Fullstack developer</h4>
          </div>

          <div className="btn">
            <button>
              <a href={MyCV} download = "Arpit_CV">
                <h5>Download CV</h5>
              </a>
            </button>
            <button>
              <a href="#contact-me">
                <h5>Let's Talk</h5>
              </a>
            </button>
          </div>
        </div>

        <div className="box2">
          <div className="box2content">
            <img src={me} alt="me" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
