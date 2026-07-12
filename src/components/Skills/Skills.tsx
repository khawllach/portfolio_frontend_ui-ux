import "./Skills.css";
import react from "../../assets/react.svg";
import figma from "../../assets/figma.png";
import Python from "../../assets/python.jpg";
import { icons } from "../Icon/Icons";
const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1 className="pagetitle">My Skills</h1>
      <div className="grid grid-cols-5 grid-rows-3 gap-y-10">
        <div className="skillscontainer">
          <div className="skillblock ">
            <img src={react} alt="Skill Image" />
          </div>
          <h1 className="skillname">React</h1>
          <div className="rateskill">
            <div className="skillratingbar" style={{ width: "90%" }}>
              <div className="bar-1"></div>
            </div>
            <span className="ratevalue">4.5/5</span>
          </div>
        </div>
        <div className="skillscontainer">
          <div className="skillblock">{icons.figma}</div>
          <h1 className="skillname">Figma</h1>
          <div className="rateskill">
            <div className="skillratingbar" style={{ width: "90%" }}>
              <div className="bar-1"></div>
            </div>
            <span className="ratevalue">4.5/5</span>
          </div>
        </div>
        <div className="skillscontainer">
          <div className="skillblock">{icons.python}</div>
          <h1 className="skillname">Python</h1>
          <div className="rateskill">
            <div className="skillratingbar" style={{ width: "90%" }}>
              <div className="bar-1"></div>
            </div>
            <span className="ratevalue">4.5/5</span>
          </div>
        </div>
        <div className="skillscontainer">
          <div className="skillblock ">{icons.github}</div>
          <h1 className="skillname">github</h1>
          <div className="rateskill">
            <div className="skillratingbar" style={{ width: "90%" }}>
              <div className="bar-1"></div>
            </div>
            <span className="ratevalue">4.5/5</span>
          </div>
        </div>
        <div className="skillscontainer">
          <div className="skillblock ">{icons.tailwind}</div>
          <h1 className="skillname">Tailwind CSS</h1>
          <div className="rateskill">
            <div className="skillratingbar" style={{ width: "90%" }}>
              <div className="bar-1"></div>
            </div>
            <span className="ratevalue">4.5/5</span>
          </div>
        </div>
        <div className="skillscontainer">
          <div className="skillblock ">
            <img src={react} alt="Skill Image" />
          </div>
          <h1 className="skillname">React</h1>
          <div className="rateskill">
            <div className="skillratingbar" style={{ width: "90%" }}>
              <div className="bar-1"></div>
            </div>
            <span className="ratevalue">4.5/5</span>
          </div>
        </div>
        <div className="skillscontainer">
          <div className="skillblock ">
            <img src={react} alt="Skill Image" />
          </div>
          <h1 className="skillname">React</h1>
          <div className="rateskill">
            <div className="skillratingbar" style={{ width: "90%" }}>
              <div className="bar-1"></div>
            </div>
            <span className="ratevalue">4.5/5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
