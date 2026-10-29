import About from "./Contact";
import Imgprofile from "./Imgprofile";
import Skills from "./Skills";
import Works from "./Works";
import AboutMe from "./Aboutme";

const Home = () => {
  return (
    <div className="bg-[#0a192f] text-white  w-full ">
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
