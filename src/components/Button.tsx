import AnchorLink from "react-anchor-link-smooth-scroll";

const Button = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-7 mt-8 md:mt-3 md:flex-row text-lg md:text-md">
      <div className="px-[130px] py-[10px] bg-gradient-to-r from-[#2184ff] via-[#02b8e1] to-[#55e0ff] border-0 rounded-full md:px-[80px] ">
        <AnchorLink href="#works">
          <button className="button">View My Work</button>
        </AnchorLink>
      </div>


      <div className="border-2 border-white px-[130px] py-[10px]  rounded-full md:px-[80px] ">
        <button
          className=""
          onClick={() => {
            window.open("./Cv.pdf", "_blank");
          }}
        >
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Button;
