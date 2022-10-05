import React from 'react'
import './journey.css'
import Title from '../title/Title'
// import {IoSchool} from'react-icons/io';

import { CgEditBlackPoint } from 'react-icons/cg';

const journey = () => {
  return (
    <>
      <div className="jcontainer" id='Myjourney'>
        <Title first="My" second="JOURNEY" third="Till now !" />

        <div class="box">
          <div className="box-child">
            <ul id="first-list">
              <li>
                <span></span>
                <div class="title"><h5><CgEditBlackPoint/> SOFTWARE DEVELOPER</h5></div>
                <div class="info">~ Currently working as Software Developer at TCS</div>
                <div class="info">~ Building Microservices in C++</div>
                <div class="info">~ Integration of REDIS-DB</div>
                <div class="info">~ API development</div>
                <div class="time">
                  <span>PRESENT</span>
                  <span>AUG 2021</span>
                </div>
              </li>
              <li>
                <span></span>
                <div class="title"><h5><CgEditBlackPoint/> ENGINEERING</h5></div>
                <div class="info">~ From Raj Kumar Goel Institute of Technology, Ghaziabad</div>
                <div class="info">~ Graduated in Electronics and Communications</div>
                <div class="info">~ Completed with 78.0 %</div>

                <div class="time">
                  <span>JUL 2021</span>
                  <span>AUG 2017</span>
                </div>
              </li>
              <li>
                <span></span>
                <div class="title"><h5><CgEditBlackPoint/> INTERMEDIATE</h5></div>
                <div class="info">~ From St. Fidelis sr. sec. school , Aligarh</div>
                <div class="info">~ Studied PCM with CS</div>
                <div class="info">~ Qulaified with 76.4 %</div>

                <div class="time">
                  <span>JUL 2017</span>
                  <span>AUG 2016</span>
                </div>
              </li>
              <li>
                <span></span>
                <div class="title"><h5><CgEditBlackPoint/> HIGH SCHOOL</h5></div>
                <div class="info">~ From City convent sr. sec. school</div>
                <div class="info">~ Qulaified with 9.2 CGPA</div>

                <div class="time">
                  <span>JUL 2014</span>
                  <span>AUG 2013</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </>
  )
}

export default journey