import React from "react";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Me from "./components/AboutMe/me";
import Myskills from "./components/myskills/myskills";
import Journey from "./components/Journey/journey";
import Projects from "./components/Projects/projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/footer";
import Mode from "./components/Modes/mode";
// import { useState } from "react";

import "./App.css";

const App = () => {
  return (
    <>
      <Mode />
      <Intro />
      <Me />
      <Myskills />
      <Journey />
      <Projects />
      <Contact />
      <Footer />

      <Navbar />
    </>
  );
};
export default App;
