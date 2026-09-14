import { icons } from "./Icon/Icons";

const About = () => {
  return (
    <section className="w-max-7xl scroll-mt-30">
      <div className="Contact" id="contact">
        <h1 className="text-4xl font-bold mb-8">Get In Touch</h1>
        <div className="mb-20 flex flex-col md:flex-row justify-center items-center space-x-20">
          <img
            src="/src/assets/myimage2.png"
            alt="Profile Image"
            className="w-[400px] h-[250px]  sm:w-[500px] sm:h-[300px] md:w-[300px] md:h-[200px] lg:w-[600px] lg:h-[300px]"
          />

          <div className="px-[50px] py-3 bg-[#161e32] rounded-3xl  shadow-[0_0_10px_#307fff] ">
            <div className="flex flex-col justify-center items-start space-y-3 relative ">
              <span className="absolute  w-[90px] h-[90px] top-[-25px] left-[-25px] border-t-[3px] border-l-[3px] border-[#307fff]"></span>
              <span className="absolute  w-[90px] h-[90px] top-[-37px] right-[-25px] border-t-[3px] border-r-[3px] border-[#307fff]"></span>
              <span className="absolute  w-[90px] h-[90px] bottom-[-25px] left-[-25px] border-b-[3px] border-l-[3px] border-[#307fff]"></span>
              <span className="absolute  w-[90px] h-[90px] bottom-[-25px] right-[-25px] border-b-[3px] border-r-[3px] border-[#307fff]"></span>

              <h2 className="text-[24px] font-bold md:text-[20px]">
                My Information:
              </h2>
              <div className="flex flex-col text-left ">
                <span className="text-[10px] text-[#307fff]">Full Name :</span>
                <hr />
                <span className="text-[15px] md:text-[13px]">
                  Chabane Khawla
                </span>
              </div>

              <div className="info-row">
                <span className="text-[10px] text-[#307fff]">Education :</span>
                <hr />
                <span className="text-[15px] md:text-[13px]">
                  M1 IN Computer Science (IL)
                </span>
              </div>

              <div className="info-row">
                <span className="text-[10px] text-[#307fff]">Adresse :</span>
                <hr />
                <span className="text-[15px] md:text-[13px]">
                  Algeria, Les Eucalyptus
                </span>
              </div>
            </div>
          </div>
        </div>

        <footer className=" max-w-[75%] mx-auto py-10">
          <hr className="  mx-auto pb-3" />
          <div className="flex flex-col-reverse justify-center items-start md:flex-row md:justify-between md:items-center">
            <div className="flex flex-row justify-center items-center  space-x-5 mt-10 md:mt-2">
              <div>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="w-[50px] h-[50px] flex justify-center items-center  border-2 border-[#007acc] rounded-xl"
                  aria-label="Visit my GitHub profile"
                  title="Visit my Github profile"
                >
                  {icons.github}
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/khawla-chabanne-8bb497260/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-[50px] h-[50px] flex justify-center items-center  border-2 border-[#007acc] rounded-xl "
                  aria-label="Visit my LinkedIn profile"
                  title="Visit my LinkedIn profile"
                >
                  {icons.linkedin}
                </a>
              </div>
              <div className="icon-container behance">
                <a
                  href="https://www.behance.net/khawlachaban"
                  target="_blank"
                  rel="noreferrer"
                  className="w-[50px] h-[50px] flex justify-center items-center  border-2 border-[#007acc] rounded-xl  "
                  title="Visit my Behance profile"
                >
                  {icons.behance}
                </a>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center space-x-3 mt-2">
              <div className="text-[10px] bg-[#161e32] flex flex-row justify-center items-center rounded-full px-6 py-3">
                <span className="mr-2">{icons.email}</span>
                chkhawla25@gmail.com
              </div>
              <div className="text-[10px] bg-[#161e32] flex flex-row justify-center items-center rounded-full px-6 py-3">
                <span className="mr-2">{icons.phone}</span>
                0663 42 61 12
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default About;
