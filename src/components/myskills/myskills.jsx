import React from 'react'
import './myskills.css';
import Title from '../title/Title';
// import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import { TbLetterC } from "react-icons/tb";
import {
  // DiJavascript1,
  // DiReact,
  // DiNodejs,
  // DiMongodb,
  // DiPython,
  DiGit

} from "react-icons/di";
import {
  // SiPytorch,
  // SiFirebase,
  // SiNextdotjs,
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiRedis,
  SiLinux,
  SiVisualstudiocode,
  SiMongodb
} from "react-icons/si";


const myskills = () => {
  return (
    <>
      <div className="scontainer" id='Myskills'>
        <Title first="Here's my" second="SKILLS" third="!!" />


        <div className="skillset ">

          <div className="skill-items " id="skill-item1"><TbLetterC /></div>
          <div className="skill-items" id="skill-item2"><SiCplusplus /></div>
          <div className="skill-items" id="skill-item3"><SiPython /></div>
          <div className="skill-items" id="skill-item8"><DiGit /></div>

          <div className="skill-items" id="skill-item5"><SiHtml5 /></div>
          <div className="skill-items" id="skill-item6"><SiCss3 /></div>
          <div className="skill-items" id="skill-item4"><SiJavascript /></div>
          <div className="skill-items" id="skill-item7"><SiReact /></div>

          <div className="skill-items" id="skill-item9"><SiRedis /></div>
          <div className="skill-items" id="skill-item12"><SiMongodb /></div>
          <div className="skill-items" id="skill-item10"><SiLinux /></div>
          <div className="skill-items" id="skill-item11"><SiVisualstudiocode /></div>




          {/* <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
              <CgCPlusPlus />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiNextdotjs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiFirebase />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <DiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <SiPytorch />
            </Col>
          </Row> */}
        </div>
      </div>
    </>
  )
}

export default myskills