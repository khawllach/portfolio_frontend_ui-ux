import me from "../assets/me.png";
import Button from "./Button";

const Imgprofile = () => {
  return (
    <section className="w-max-7xl mb-40 scroll-mt-30 pt-[50px]" id="home">
      <div className="flex flex-col justify-center items-center pt-20 ">
        <div
          className="w-[300px] h-[300px]   bg-[#101727]     relative overflow-hidden
 rounded-full     flex justify-center items-center
border-4 border-[#007acc] shadow-[0_0_15px_rgba(0,70,192,0.2),0_0_30px_rgba(0,140,255,0.2)] transition duration-300 ease-in-out"
        >
          <img
            src={me}
            alt=""
            className="absolute w-1/2 h-[70%] object-cover
      rounded-[20%] z-[1]"
          />
        </div>

        <div className="text-white font-bold text-[60px] md:text-[80px]">
          <p className="flex flex-row items-center justify-center ">
            Hi ,Im{" "}
            <p className="bg-gradient-to-r from-[#2184ff] via-[#02b8e1]  to-[#55e0ff] bg-clip-text text-transparent ">
              Khawla
            </p>
          </p>

          <h4 className="font-normal text-[26px] md:text-[30px]">
            Im a{" "}
            <span className="bg-gradient-to-r from-[#2184ff] via-[#02b8e1]  to-[#55e0ff] bg-clip-text text-transparent">
              UI/UX Designer
            </span>{" "}
            &<br />
            <span className="bg-gradient-to-r from-[#2184ff] via-[#02b8e1]  to-[#55e0ff] bg-clip-text text-transparent">
              Frontend Dev
            </span>
          </h4>

          <p className="text-[14px] leading-[33px] md:text-[18px]">
            I Create a beautiful , responsive web experiences using Modern
            Technologies. <br /> Passionate about clean code and user-centered
            design <br />
            with clean code.
          </p>
        </div>
        <div className="mt-5">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Imgprofile;
