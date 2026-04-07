import Listskills from "../Listskills/Listskills";
import "./Skills.css";
const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1 className="pagetitle">My Skills</h1>
      <div className="desc">
        <div className="frontend">
          <h3 className="subtitle">Frontend Dev</h3>
          <p className="skildesc">
            Im a passionate web developer with 1 month experience creating
            modern, responsive web application. I specialize in frontend dev
            using cutting-edge technologies to deliver exceptional user
            experiences.{" "}
          </p>
        </div>
        <div className="design">
          <h3 className="subtitle">UI/UX Designer</h3>
          <p className="skildesc">
            Im a passionate web developer with 1 month experience creating
            modern, responsive web application. I specialize in frontend dev
            using cutting-edge technologies to deliver exceptional user
            experiences.{" "}
          </p>
        </div>
      </div>
      <Listskills />
    </div>
  );
};

export default Skills;
