
import { icons } from "./Icon/Icons";
import { FaReact } from "react-icons/fa6";

type skill = {
  id: number;
  name: string;
  logo: React.ReactNode;
};

const listskills: skill[] = [
  {
    id: 1,
    name: "react",
    logo: <FaReact className=" " />,
  },
  { id: 2, name: "python", logo: icons.python },
  { id: 3, name: "tailwind", logo: icons.tailwind },
  { id: 4, name: "figma", logo: icons.figma },
  { id: 5, name: "Git", logo: icons.github },
];

const Skills = () => {
  return (
    <section className="w-max-7xl scroll-mt-30" id="skills">
      <div className="flex flex-col justify-center items-center gap-10  mb-40 ">
        <h1 className="text-4xl font-bold">My Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-20  ">
          {listskills.map((skill) => {
            return (
              <div
                className="flex justify-center relative bg-[#161e32] py-[130px] px-[140px] rounded-2xl sm:py-[90px] sm:px-[100px] md:py-[70px] md:px-[80px]
                shadow-[0_0_15px_#2184ff]"
                key={skill.id}
              >
                <div className="absolute flex flex-col justify-center items-center gap-5 top-1/2 bottom-1/2 ">
                  <div className="text-blue-400 [&>svg]:w-20 [&>svg]:h-20 sm:[&>svg]:w-16 sm:[&>svg]:h-16 md:[&>svg]:w-10 md:[&>svg]:h-10">
                    {skill.logo}
                  </div>
                  <h1
                    className="font-normal text-[27px] sm:text-[20px]
                   md:text-1xl"
                  >
                    {skill.name}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
