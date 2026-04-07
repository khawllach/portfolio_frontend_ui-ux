import React, { useState } from "react";
import "./Bar.css";
import {
  FaCode,
  FaBriefcase,
  FaUsers,
  FaEnvelope,
  FaHouse,
  FaLaptopCode,
} from "react-icons/fa6";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Bar = () => {
  const [active, setActive] = useState<string>("home");

  return (
    <div className="bar">
      <ul className="pages">
        <li
          className={active === "home" ? "active" : ""}
          onClick={() => setActive("home")}
        >
          <AnchorLink href="#home">
            <FaHouse />
          </AnchorLink>
        </li>
        <li
          className={active === "skills" ? "active" : ""}
          onClick={() => setActive("skills")}
        >
          <AnchorLink href="#skills" onClick={() => setActive("skills")}>
            <FaLaptopCode />
          </AnchorLink>
        </li>
        <li
          className={active === "works" ? "active" : ""}
          onClick={() => setActive("works")}
        >
          <AnchorLink href="#works" onClick={() => setActive("works")}>
            <FaBriefcase />
          </AnchorLink>
        </li>
        <li
          className={active === "hackathons" ? "active" : ""}
          onClick={() => setActive("hackathons")}
        >
          <AnchorLink
            href="#hackathons"
            onClick={() => setActive("hackathons")}
          >
            <FaUsers />
          </AnchorLink>
        </li>
        <li
          className={active === "contact" ? "active" : ""}
          onClick={() => setActive("contact")}
        >
          <AnchorLink href="#contact" onClick={() => setActive("contact")}>
            <FaEnvelope />
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
};

export default Bar;
