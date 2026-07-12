import "./Aboutme.css";
import react from "../../assets/react.svg";
import figma from "../../assets/figma.png";
import Python from "../../assets/python.jpg";
import { icons } from "../Icon/Icons";
import imgaboutme from "../../assets/imgaboutme.png";
const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="aboutme">
        <h1 className="pagetitle">About Me</h1>
        <div className="aboutmecontent">
          <div className="aboutmeimg">
            <img src={imgaboutme} alt="About Me " className="imgaboutme" />
          </div>
          <div className="aboutmeright">
            <div className="aboutmeparagraph">
              <h2 className="subtitle">About Me</h2>
              <p>
                I’m a creative designer and frontend developer who enjoys
                turning ideas into beautiful, modern, and responsive web
                interfaces. I start my work by designing clean and user-friendly
                layouts in Figma, focusing on colors, typography, spacing, and
                the overall user experience. After completing the design, I
                bring it to life with frontend development, transforming static
                designs into functional and responsive websites.
              </p>
              <p>
                My goal is to create websites that are not only visually
                attractive but also easy to use and well-structured. I pay
                attention to details, design consistency, and how users interact
                with each page. I’m passionate about combining creativity and
                code to build digital experiences that look professional, work
                smoothly on different devices, and leave a strong impression.
              </p>
              <div className="notes">
                <div className="note">
                  <p className="note-title">Experience</p>
                  <p className="note-title">5+ Years</p>
                </div>
                <div className="note">
                  <p className="note-title">Project Completed</p>
                  <p className="note-title">50+</p>
                </div>
                <div className="note">
                  <p className="note-title">Happy Clients</p>
                  <p className="note-title">20+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
