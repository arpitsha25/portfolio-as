import React from "react";
// import { FaFileCode } from 'react-icons/fa';
// import FaFileCode from ''
import "./boxdata.css";
// import Ai from "/home/arpit/PROJECT/React-practice/arpit/src/components/images/ai.jpg";
const boxdata = (props) => {
  // const images =[{Ai}];
  return (
    <>

      <div className="p-items">
        <div className="p-title">
          <h5>{props.title}</h5>
        </div>

        <div className="p-main">
          <img src={props.image} alt="" />
          <div class="middle">
            <div class="text">
              {" "}
              <h5>Kindly do visit github repo for more details...</h5>
            </div>
          </div>
        </div>

        <div className="p-bottom">
          <a className="cde" href={props.codeurl} target="_blank" rel="noopener noreferrer"> <h5>VIEW CODE</h5></a>
          <a className="cde" href={props.demourl} target="_blank" rel="noopener noreferrer"> <h5>VIEW DEMO</h5></a>
          {/* <h5>VIEW CODE</h5> */}
        </div>
      </div>
    </>
  );
};

export default boxdata;
