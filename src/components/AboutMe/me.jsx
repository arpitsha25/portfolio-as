import React from 'react'
import './me.css';
// import img1 from '../images/img1.png';
import img2 from '../images/img2.jpeg';
import { FaQuoteLeft } from 'react-icons/fa';
// import { FaQuoteRight } from 'react-icons/fa';
import Title from '../title/Title';

const me = () => {
  return (
    <>
      <div className="mecontainer" id='Aboutme'>
        <Title first="Get to know" second="ABOUT" third="me" />
        <div className="cont">
          <div className="meleft">
            <div className="image">
              <img src={img2} alt="" />
            </div>
          </div>

          <div className="meright">
            <div className="merightcontent">
              <h1>
              <FaQuoteLeft /></h1>
              <h5>Namaste,<br /> I am <span>Arpit Sharma</span> from Aligarh, UP, INDIA.
                I am a tech enthusiast who  is always eager to learn
                more tech stuffs. My core interest is to  develop an
                effective and comprehensive solutions using my skills. Currently I am
                working in TCS as a <span>software developer.</span>
              </h5>
              {/* <h1>right</h1> */}
              <div className="mebtn">

                <button><a href="#Myskills"><h5>My Skills</h5></a></button>
              </div>

            </div>

          </div>
        </div>
      </div>


    </>
  )
}

export default me