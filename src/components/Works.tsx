import { icons } from "./Icon/Icons";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.png";

const Works = () => {
  return (
    <section
      className="max-w-7xl mb-20  mx-auto flex flex-row justify-center items-center "
      id="works"
    >
      <div className="flex flex-col space-y-10 justify-center items-center p-0 m-0">
        <div className="flex flex-col justify-center items-center space-y-3">
          <h1 className="text-4xl font-bold">My Works</h1>
          <h3 className="text-md font-light">
            A Collection of my recent Projects
          </h3>
        </div>
        <div className="flex flex-col space-y-20 justify-center items-center mx-8 max-w-5xl">
          <div className="flex flex-col items-center md:flex-row space-x-10 justify-center ">
            <img
              src={work1}
              alt="Project Image"
              className="w-[80%] md:w-[35%] md:h-[35%]   rounded-lg hover:scale-110 transition-transform duration-200 ease-in brightness-50
              
              "
            />
            <div className="flex flex-col space-y-6 md:space-y-3 lg:space-y-10">
              <div className="p-3  ">
                <div className="flex flex-col space-y-1 text-left ">
                  <h4 className="text-xl font-bold  md:text-[17px] lg:text-[30px]">
                    {" "}
                    Architecture Team Landing Page{" "}
                  </h4>
                  <h6 className="text-[11px] max-w-[370px] sm:max-w-[580px] lg:max-w-[500px] lg:text-[15px]">
                    This project is a clean and elegant landing page designed
                    for an architecture team or firm that specializes in modern,
                    sustainable, and innovative building solutions. The goal was
                    to create a digital presence that showcases the team’s
                    vision, expertise, and standout projects in a visually
                    compelling way.
                  </h6>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center px-3">
                <div className="flex flex-row space-x-4 px-3">
                  <div className="flex justify-center items-center bg-[#161e32] text-center text-sm px-5 py-1 md:px-4 lg:px-7 rounded-full text-[#007acc] shadow-[0_0_11px_#007acc] ">
                    react
                  </div>
                  <div className="flex justify-center items-center bg-[#161e32] text-center text-sm px-5 py-1 md:px-4  lg:px-7 rounded-full text-[#007acc] shadow-[0_0_11px_#007acc] ">
                    figma
                  </div>
                  <div className="flex justify-center items-center bg-[#161e32] text-center text-sm px-5 py-1 md:px-4  lg:px-7 rounded-full text-[#007acc] shadow-[0_0_11px_#007acc] ">
                    javascript
                  </div>
                </div>
                <div className="flex flex-row space-x-1 px-3 lg:space-x-2">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="w-[35px] h-[35px]  md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] flex justify-center items-center  border-2 border-[#007acc] rounded-xl shadow-[0_0_11px_#007acc] "
                    aria-label="Visit my GitHub profile"
                    title="Visit my Github profile"
                  >
                    {icons.github}
                  </a>
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="w-[35px] h-[35px]  md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] flex justify-center items-center  border-2 border-[#007acc] rounded-xl shadow-[0_0_11px_#007acc] "
                    aria-label="Visit my Figma profile"
                    title="Visit my Figma profile"
                  >
                    {icons.figma}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col  items-center md:flex-row space-x-10 justify-center mx-8 max-w-5xl">
            <img
              src={work2}
              alt="Project Image"
              className="w-[80%] md:w-[35%] md:h-[35%]   rounded-lg hover:scale-110 transition-transform duration-200 ease-in brightness-50"
            />

            <div className="flex flex-col space-y-6 md:space-y-8 lg:space-y-10">
              <div className="p-3  ">
                <div className="flex flex-col  space-y-1 text-left">
                  <h4 className="text-xl font-bold md:text-[17px] lg:text-[30px]">
                    Landing Page luxury outfit men
                  </h4>
                  <h6 className="text-[11px] max-w-[370px] sm:max-w-[580px] lg:max-w-[500px] lg:text-[15px]">
                    The project is a modern and visually appealing landing page
                    designed to showcase and sell luxury men’s outfits online.
                    The main goal is to create a premium digital experience that
                    reflects elegance, exclusivity, and high-end fashion while
                    driving customer interest and sales.
                  </h6>
                </div>
              </div>

              <div className="flex flex-row justify-between items-center px-3">
                <div className="flex flex-row space-x-4 px-3">
                  <div className="flex justify-center items-center bg-[#161e32] text-center text-sm px-5 py-1 md:px-4  lg:px-7  rounded-full text-[#007acc] shadow-[0_0_11px_#007acc] ">
                    react
                  </div>
                  <div className="flex justify-center items-center  bg-[#161e32] text-center text-sm px-5 py-1 md:px-4  lg:px-7 rounded-full text-[#007acc] shadow-[0_0_11px_#007acc] ">
                    figma
                  </div>
                  <div className="flex justify-center items-center bg-[#161e32] text-center text-sm px-5 py-1 md:px-4  lg:px-7  rounded-full text-[#007acc] shadow-[0_0_11px_#007acc] ">
                    javascript
                  </div>
                </div>
                <div className="flex flex-row space-x-1 px-3 lg:space-x-2">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="w-[35px] h-[35px]  md:w-[40px] md:h-[40px] flex justify-center items-center  border-2 border-[#007acc] rounded-xl shadow-[0_0_11px_#007acc] "
                    aria-label="Visit my GitHub profile"
                    title="Visit my Github profile"
                  >
                    {icons.github}
                  </a>
                  <a
                    href="https://www.figma.com/@yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="w-[35px] h-[35px]  md:w-[40px] md:h-[40px] flex justify-center items-center  border-2 border-[#007acc] rounded-xl shadow-[0_0_11px_#007acc] "
                    aria-label="Visit my Figma profile"
                    title="Visit my Figma profile"
                  >
                    {icons.figma}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row space-x-10 justify-center mx-8 max-w-5xl">
            <img
              src={work3}
              alt="Project Image"
              className="w-[80%] md:w-[35%] md:h-[35%]  rounded-lg hover:scale-110 transition-transform duration-200 ease-in brightness-50"
            />
            <div className="flex flex-col  space-y-6 md:space-y-8 lg:space-y-10">
              <div className="p-3 ">
                <div className="flex flex-col space-y-1 text-left">
                  <h4 className="text-xl font-bold  md:text-[17px] lg:text-[30px]">
                    MENA Voice
                  </h4>
                  <h6 className="text-[11px] max-w-[370px] sm:max-w-[580px] lg:max-w-[500px] lg:text-[15px]">
                    MENA VOICE is an AI-powered platform that helps MENA
                    businesses automate calls, orders, appointments, customer
                    support, and sales campaigns. Supporting Arabic and regional
                    dialects, it reduces operational costs while improving
                    efficiency and revenue.
                  </h6>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center px-3 ">
                <div className="flex flex-row space-x-4 px-3">
                  <div className="flex justify-center items-center bg-[#161e32] text-center text-sm px-5 py-1 md:px-4  lg:px-7   rounded-full text-[#007acc] shadow-[0_0_11px_#007acc] ">
                    react
                  </div>
                  <div className="flex justify-center items-center bg-[#161e32] text-center text-sm px-5 py-1 md:px-4  lg:px-7 rounded-full text-[#007acc] shadow-[0_0_11px_#007acc] ">
                    figma
                  </div>
                  <div className="flex justify-center items-center bg-[#161e32] text-center text-sm px-5 py-1 md:px-4  lg:px-7  rounded-full text-[#007acc] shadow-[0_0_11px_#007acc] ">
                    javascript
                  </div>
                </div>
                <div className="flex flex-row space-x-1 px-3 lg:space-x-2">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="w-[35px] h-[35px]  md:w-[40px] md:h-[40px] flex justify-center items-center  border-2 border-[#007acc] rounded-xl shadow-[0_0_11px_#007acc] "
                    aria-label="Visit my GitHub profile"
                    title="Visit my Github profile"
                  >
                    {icons.github}
                  </a>
                  <a
                    href="https://www.figma.com/@yourusername"
                    target="_blank"
                    rel="noreferrer"
                    className="w-[35px] h-[35px]  md:w-[40px] md:h-[40px] flex justify-center items-center  border-2 border-[#007acc] rounded-xl shadow-[0_0_11px_#007acc] "
                    aria-label="Visit my Figma profile"
                    title="Visit my Figma profile"
                  >
                    {icons.figma}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*<div className="flex flex-row justify-center items-center py-10 ">
          <button
            className=" text-center py-[10px] px-[28%] bg-gradient-to-r from-[#2184ff] via-[#02b8e1] to-[#55e0ff] border-0 rounded-full "
            onClick={navigate}
          >
            View My Work's
          </button>
        </div>*/}
      </div>
    </section>
  );
};

export default Works;
