
import './Navbar.css';
import { AiFillHome } from 'react-icons/ai';
import { AiFillSetting } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { GiJourney } from 'react-icons/gi';
import { AiFillCode } from 'react-icons/ai';
import { IoMdChatbubbles } from 'react-icons/io';
// IoMdChatbubbles

let Navbar = () => {
  return (

    <>
      <div className="nav-bar">
        <ol>
          <li>
            <a href="#Intro"> <AiFillHome /></a>
            <a href="#Aboutme"><FaUserCircle /></a>
            <a href="#Myskills"><AiFillSetting /></a>

            <a href="#Myjourney"><GiJourney /></a>
            <a href="#MyProjects"><AiFillCode /></a>
            <a href="#contact-me"><IoMdChatbubbles /></a>
          </li>
        </ol>
      </div>

    </>
  );
}

export default Navbar;
