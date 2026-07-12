import { Link, Route, Routes, useNavigate } from "react-router-dom";
import About from "../About/About";
import Bar from "../Bar/Bar";
import Imgprofile from "../Imgprofile/Imgprofile";
import Skills from "../Skills/Skills";
import Works from "../Works/Works";
import "./Home.css";
import Allwork from "../Allwork/Allwork";
import AboutMe from "../Aboutme/Aboutme";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="blur-circle1"></div>
      <Imgprofile />
      <Skills />
      <AboutMe />
      <Works />
      <About />
    </div>
  );
};

export default Home;
