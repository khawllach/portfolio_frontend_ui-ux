import imgaboutme from "../assets/imgaboutme.png";
const AboutMe = () => {
  return (
    <section id="about-me" className="w-max-7xl scroll-mt-30 mb-20">
      <h1 className="text-4xl font-bold">About Me</h1>
      <div className="flex flex-col justify-center items-center space-y-1 ">
        <div className="flex flex-col justify-center items-center text-center md:flex-row md:justify-center md:items-center md:space-x-7 space-y-3">
          <img
            src={imgaboutme}
            alt="About Me "
            className="w-[400px] h-[400px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] "
          />

          <div className="flex flex-col justify-center items-center space-y-5 py-10 max-w-[350px] sm:max-w-[400px] lg:max-w-[600px] ">
            <p className="text-center ">
              I’m a creative designer and frontend developer who enjoys turning
              ideas into beautiful, modern, and responsive web interfaces. I
              start my work by designing clean and user-friendly layouts in
              Figma, focusing on colors, typography, spacing, and the overall
              user experience. After completing the design, I bring it to life
              with frontend development, transforming static designs into
              functional and responsive websites.
            </p>
            <p className="text-center">
              My goal is to create websites that are not only visually
              attractive but also easy to use and well-structured. I pay
              attention to details, design consistency, and how users interact
              with each page. I’m passionate about combining creativity and code
              to build digital experiences that look professional, work smoothly
              on different devices, and leave a strong impression.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-5 md:flex-row md:space-x-9 md:justify-center md:items-center  mt-10">
          <div className=" px-20  py-2 rounded-full bg-[#161e32]  shadow-[0_0_11px_#007acc]  hover:shadow-[0_0_20px_#007acc] md:mt-5">
            <div className="  flex flex-col justify-center items-center ">
              <p className="text-[10px] pb-1 ">Years of Experience</p>
              <p className="text-[15px]">1+ </p>
            </div>
          </div>

          <div className=" px-20  py-2 rounded-full bg-[#161e32] shadow-[0_0_11px_#007acc]  hover:shadow-[0_0_20px_#007acc]">
            <div className="  flex flex-col justify-center items-center ">
              <p className="text-[10px] pb-1 ">Project Completed</p>
              <p className="text-[15px]">1+ </p>
            </div>
          </div>

          <div className=" px-20  py-2 rounded-full bg-[#161e32] shadow-[0_0_11px_#007acc]  hover:shadow-[0_0_20px_#007acc]">
            <div className="  flex flex-col justify-center items-center ">
              <p className="text-[10px] pb-1 ">Happy Clients</p>
              <p className="text-[15px]">0+ </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
