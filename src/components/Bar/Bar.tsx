import React, { useEffect, useState } from "react";
import "./Bar.css";
import {
  FaBriefcase,
  FaUsers,
  FaEnvelope,
  FaHouse,
  FaLaptopCode,
} from "react-icons/fa6";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { id: "home", icon: <FaHouse /> },
  { id: "skills", icon: <FaLaptopCode /> },
  { id: "about-me", icon: <FaUsers /> },
  { id: "works", icon: <FaBriefcase /> },
  { id: "contact", icon: <FaEnvelope /> },
];

const Bar = () => {
  const [active, setActive] = useState<string>("home");
  const location = useLocation();
  const navigate = useNavigate();

  const isAllWork = location.pathname === "/allwork";

  useEffect(() => {
    // Don't track scroll on /allwork page
    if (isAllWork) return;

    const handleScroll = () => {
      const position = window.innerHeight * 0.4;
      let currentSection = "home";

      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rectangle = section.getBoundingClientRect();
          if (rectangle.top <= position && rectangle.bottom >= position) {
            currentSection = item.id;
          }
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAllWork]);

  const handleAllWorkClick = (id: string) => {
    // Navigate to home then scroll to the section
    navigate(`/#${id}`);
    // Small delay to let the page render before scrolling
    setTimeout(() => {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className="bar">
      <ul className="pages">
        {menuItems.map((item) => (
          <li
            key={item.id}
            className={!isAllWork && active === item.id ? "active" : ""}
          >
            {isAllWork ? (
              // On /allwork: plain button that navigates back home to the right section
              <button
                onClick={() => handleAllWorkClick(item.id)}
                aria-label={`Go to ${item.id}`}
                className="icons-allwork"
              >
                {item.icon}
              </button>
            ) : (
              // On home: normal smooth scroll anchor
              <AnchorLink
                href={`#${item.id}`}
                onClick={() => setActive(item.id)}
                aria-label={`Go to ${item.id}`}
              >
                {item.icon}
              </AnchorLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Bar;
