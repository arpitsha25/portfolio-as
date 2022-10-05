import React from "react";

import { BsCloudMoonFill } from "react-icons/bs";
import { BsFillCloudSunFill } from "react-icons/bs";
import "./mode.css";

const Mode = () => {
  const [darkMode, setDarkMode] = React.useState(true);

  React.useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      // document.body.style.background = "pink";
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);
  return (
    <>
      {/* <Mode / */}
      <div className="toggle_icon">
        {/* <h1>Header</h1> */}
        <h3 onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <BsCloudMoonFill /> : <BsFillCloudSunFill />}{" "}
        </h3>
        {/* <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button> */}
      </div>
    </>
  );
};

export default Mode;
