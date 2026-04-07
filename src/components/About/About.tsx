import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import linkedin from "../../assets/linkedin.avif";
import "./About.css";
import insta from "../../assets/insta.jpg";
import git from "../../assets/git.jpg";
import behance from "../../assets/behance.webp";

const About = () => {
  return (
    <div className="about-me" id="contact">
      <div className="header">
        <h1 className="my-work">About Me</h1>
        <h3 className="sub-my-work">Informations About ME</h3>
      </div>
      <div className="all">
        <div className="left">
          <div className="left-up">
            <h2 className="title-left">My Information:</h2>
            <div className="info-row">
              <span className="label">Full Name :</span>
              <span className="value">Chabane Khawla</span>
            </div>

            <div className="info-row">
              <span className="label">Education :</span>
              <span className="value">M1 IN Computer Science (IL)</span>
            </div>

            <div className="info-row">
              <span className="label">Adresse :</span>
              <span className="value">Algeria, Les Eucalyptus</span>
            </div>

            <div className="info-row">
              <span className="label">Email :</span>
              <span className="value">Chkhawla25@gmail.com</span>
            </div>

            <div className="info-row">
              <span className="label">Phone Number :</span>
              <span className="value">0663426112</span>
            </div>
          </div>
          <div className="left-down">
            <h2 className="title-left-down">Contact Me:</h2>
            <span className="sub-title-left">
              if you want to ask me send to me message!{" "}
            </span>
            <textarea rows={4} cols={40} placeholder="Entrer text" />

            <div className="send">
              <button className="button">Send</button>
            </div>
          </div>
        </div>
        <div className="right">
          <h1 className="title-right">Social Media</h1>
          <div className="SM">
            <div className="insta">
              <img src={insta} alt="" className="icons" />
              <h2 className="title-sm">Instagram</h2>
            </div>
            <div className="linkedin">
              <img src={linkedin} alt="" className="icons" />
              <h2 className="title-sm">LinkedIn</h2>
            </div>
            <div className="github">
              <img src={git} alt="" className="icons" />
              <h2 className="title-sm">GitHub</h2>
            </div>
            <div className="behance">
              <img src={behance} alt="" className="icons" />
              <h2 className="title-sm">Behance</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
