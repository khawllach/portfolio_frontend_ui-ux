import { FaGithub, FaTwitter } from "react-icons/fa6";
import "./App.css";
import Home from "./components/Home/Home";
import Bar from "./components/Bar/Bar";
import { useRef } from "react";
import { FaCode } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";

import AnchorLink from "react-anchor-link-smooth-scroll";
import About from "./components/About/About";
import Hackathons from "./components/Hackathons/Hackathons";
import Works from "./components/Works/Works";
import Skills from "./components/Skills/Skills";
import Imgprofile from "./components/Imgprofile/Imgprofile";
import { Route, Routes } from "react-router-dom";
import Allwork from "./components/Allwork/Allwork";

function App() {
  return (
    <div>
      <Bar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/about" element={<About />} />
        <Route path="/allwork" element={<Allwork />} />
      </Routes>
    </div>
  );
}

export default App;
