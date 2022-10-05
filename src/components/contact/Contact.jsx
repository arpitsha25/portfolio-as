import React from "react";
import Title from "../title/Title";
import "./Contact.css";
// import { MdMarkEmailUnread } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
// import { IoLogoWhatsapp } from "react-icons/io";
import { BsLinkedin ,BsGithub} from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

// BsLinkedin
import Card from "./cards/Card";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ks0t2sn",
        "template_tbr9s5o",
        e.target,
        "afAJxA8Vs_2AydKnu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };
  return (
    <>
      <Title first="Heyy" second="LET'S TALK" third="!!" />
      <div className="c-container" id="contact-me">
        <div className="box-one">
          <Card
            one={<BsLinkedin />}
            two="Connect me"
            three="Arpit Kumar Sharma"
            url="https://www.linkedin.com/in/arpit25/"
            msg="get connected"
          />
          <Card
            one={<AiFillInstagram />}
            two="Follow me"
            three="iem.arpit"
            url="https://instagram.com/iem.arpit?igshid=YmMyMTA2M2Y="
            msg="follow now"
          />
          <Card
            one={<BsGithub />}
            two="Follow me"
            three="arpitsha25"
            url="https://github.com/arpitsha25"
            msg="follow now"
          />
        </div>

        <div className="box-two">
          <div className="b2">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" placeholder="YOUR NAME" name="user_name" />
              <input type="email" placeholder="EMAIL ID" name="user_email" />
              <input type="text" placeholder="SUBJECT" name="subject" />
              <textarea
                cols="28"
                rows="8"
                placeholder="MESSAGE"
                name="message"
              ></textarea>
              <button className="btn btn2" type="submit" value="Send">
                <a href=" ">
                  <h5>SEND MESSAGE</h5>
                </a>
              </button>
            </form>
          </div>
        </div>
        {/* <h3>heyy</h3> */}
      </div>
    </>
  );
};

export default Contact;
