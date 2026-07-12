import { useState } from "react";
import "./Allwork.css";

const Allwork = () => {
  const [activeTab, setActiveTab] = useState("");
  const [selectedCard, setSelectedCard] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "This project is a clean and elegant landing page designed for an architecture team or firm that specializes in modern, sustainable, and innovative building solutions. The goal was to create a digital presence that showcases the team’s vision,expertise, and standout projects in a visually compelling way.",
      image: "/src/assets/work1.png",
      imagecase: "/src/assets/workcase1.png",
    },
    {
      id: 2,
      title: "E-commerce Website",
      description: "Online shop landing page.",
      image: "/src/assets/work2.png",
    },
  ];
  return (
    <div className="workpage" id="allworks">
      <div className="worklist">
        <div className="header">
          <h1 className="my-work">My Works</h1>
          <h3 className="sub-my-work">A Collection of my recent Projects</h3>
        </div>
        <div className="choices">
          <ul className="my-text">
            {["Design", "FrontEnd"].map((tab) => (
              <li key={tab} className="w-full">
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`w-full px-4 py-2.5 border rounded-[30px] shadow-[0px_0px_10px_#007acc] ${
                    activeTab === tab
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>

          {/* Content */}
          <div className="mt-4 p-4  rounded-[30px] shadow-[0px_0px_10px_#007acc]">
            {activeTab === "Design" && <p>Design UI/UX</p>}
            {activeTab === "FrontEnd" && <p>FrontEnd</p>}
          </div>
        </div>
        <div className="works">
          {projects.map((project) => (
            <div
              className="card2"
              key={project.id}
              onClick={() => setSelectedCard(project)}
            >
              <img src={project.image} alt="Project Image" />
              <div className="content2">
                <h4 className="titlework2">{project.title}</h4>
                <h6 className="workdesc2">{project.description}</h6>
                <div className="no-btns2">
                  <div className="no-btn2">react</div>
                  <div className="no-btn2">figma</div>
                  <div className="no-btn2">javascript</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedCard && (
          <div className="overlay" onClick={() => setSelectedCard(null)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <button
                  className="close-btn"
                  onClick={() => setSelectedCard(null)}
                 >
                  ×
                </button>
              </div>
              <img src={selectedCard.imagecase} alt={selectedCard.title} />
              <div className="modal-body">
                <h2 className="titlework2">{selectedCard.title}</h2>
                <p className="workdesc2">{selectedCard.description}</p>
                <div className="no-btns2card">
                  <div className="no-btn2card">react</div>
                  <div className="no-btn2card">figma</div>
                  <div className="no-btn2card">javascript</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Allwork;
