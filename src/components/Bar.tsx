import React, { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaUsers,
  FaEnvelope,
  FaHouse,
  FaLaptopCode,
} from "react-icons/fa6";
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

  // Scroll to section with space for navbar
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    const navbarOffset = 100;

    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionPosition - navbarOffset,
      behavior: "smooth",
    });

    setActive(id);
  };

  useEffect(() => {
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

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAllWork]);

  const handleAllWorkClick = (id: string) => {
    navigate(`/#${id}`);

    setTimeout(() => {
      scrollToSection(id);
    }, 100);
  };

  return (
    <nav
      className="
        flex
        px-10 py-2
        flex-row        
        justify-center items-center

        bg-[#183148]
        rounded-[38px]

        fixed
        top-4
        left-1/2
        -translate-x-1/2
        z-50

        text-[aliceblue]

        shadow-[0_0_15px_rgba(0,140,255,0.4),0_0_30px_rgba(0,140,255,0.2)]

        transition-all
        duration-300
        ease-in-out

        hover:shadow-[0_0_25px_rgba(0,170,255,0.6),0_0_50px_rgba(0,170,255,0.4)]

      "
    >
      <ul
        className="
          flex 
          flex-row
          justify-center items-center
          gap-[60px]
          max-[500px]:gap-[30px]
          p-0 m-0
          list-none
        "
      >
        {menuItems.map((item) => {
          const isActive = active === item.id;

          return (
            <li
              key={item.id}
              className="
                transition-all
                duration-300
                hover:scale-110
                hover:drop-shadow-[0_0_8px_rgba(0,170,255,0.8)]
                cursor-pointer
              "
            >
              {isAllWork ? (
                <button
                  onClick={() => handleAllWorkClick(item.id)}
                  aria-label={`Go to ${item.id}`}
                  title={`Visit my ${item.id} profile`}
                  className="
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                  "
                >
                  {React.cloneElement(item.icon, {
                    className: `
                      sm:w-[24px]
                      sm:h-[24px]
                      sm:text-[24px]
                      w-[20px]
                      h-[20px]
                      text-[20px]
                      text-white
                      transition-all
                      duration-300

                      ${isActive ? "bg-[#4691db] p-[7px] rounded-[23px]" : ""}
                    `,
                  })}
                </button>
              ) : (
                <button
                  onClick={() => scrollToSection(item.id)}
                  aria-label={`Go to ${item.id}`}
                  title={`Visit my ${item.id} profile`}
                  className="
                  lg:w-[60px]
                  lg:h-[60px]
                    w-[40px]
                    h-[40px]
                    flex
                    items-center
                    justify-center

                    transition-all
                    duration-300
                    bg-transparent
                    border-none
                    cursor-pointer
                  "
                >
                  {React.cloneElement(item.icon, {
                    className: `
                    lg:w-[32px]
                    lg:h-[32px]
                    lg:text-[32px]
                      w-[24px]
                      h-[24px]
                      text-[24px]
                      text-white
                      transition-all
                      duration-300

                      ${isActive ? "bg-[#4691db] p-[4px] rounded-[23px]" : ""}
                    `,
                  })}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Bar;
