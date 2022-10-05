import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <>
      <div className="boxes">
        <div className="b1-icon">
          <h2>{props.one}</h2>
        </div>
        <div className="b1-name">
          <h5>{props.two}</h5>
        </div>
        <div className="b1-uname">
          <p>{props.three}</p>
        </div>
        <div className="b1-msg">
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.msg}
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
