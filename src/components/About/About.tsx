import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import linkedin from "../../assets/linkedin.avif";
import "./About.css";
import insta from "../../assets/insta.jpg";
import git from "../../assets/git.jpg";
import behance from "../../assets/behance.webp";
import { icons } from "../Icon/Icons";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <div className="about-me" id="contact">
      <div className="header">
        <h1 className="my-work">Get In Touch</h1>
      </div>
      <div className="all">
        <img
          src="/src/assets/myimage2.png"
          alt="Profile Image"
          className="myimage"
        />
        <div className="left">
          <span className="corner top-left"></span>
          <span className="corner top-right"></span>
          <span className="corner bottom-left"></span>
          <span className="corner bottom-right"></span>
          <h2 className="title-left">My Information:</h2>
          <div className="info-row">
            <span className="label">Full Name :</span>
            <hr className="separator" />
            <span className="value">Chabane Khawla</span>
          </div>

          <div className="info-row">
            <span className="label">Education :</span>
            <hr className="separator" />
            <span className="value">M1 IN Computer Science (IL)</span>
          </div>

          <div className="info-row">
            <span className="label">Adresse :</span>
            <hr className="separator" />
            <span className="value">Algeria, Les Eucalyptus</span>
          </div>
        </div>
      </div>
      <div className="footer">
        <hr className="line" />
        <div className="social-icons">
          <div className="social">
            <div>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="icon-container insta"
              >
                {icons.insta}
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/khawla-chabanne-8bb497260/"
                target="_blank"
                rel="noreferrer"
                className="icon-container linkedin"
              >
                {icons.linkedin}
              </a>
            </div>
            <div className="icon-container behance">
              <a
                href="https://www.behance.net/khawlachaban"
                target="_blank"
                rel="noreferrer"
                className="icon-container behance"
              >
                {icons.behance}
              </a>
            </div>
          </div>
          <div className="email-phone">
            <div className="email">
              {icons.email}
              <p className="contact-text">chkhawla25@gmail.com</p>
            </div>
            <div className="email">
              {icons.phone}
              <p className="contact-text">0663 42 61 12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
