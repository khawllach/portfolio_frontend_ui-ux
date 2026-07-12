import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Works.css";
import { useNavigate } from "react-router-dom";

const Works = () => {
  const nav = useNavigate();
  const navigate = () => {
    nav("/allwork");
  };

  return (
    <div className="workpage" id="works">
      <div className="header">
        <h1 className="my-work">My Works</h1>
        <h3 className="sub-my-work">A Collection of my recent Projects</h3>
      </div>
      <div className="worklist">
        <div className="card">
          <img src="/src/assets/work1.png" alt="Project Image" />
          <div className="description">
            <div className="content">
              <h4 className="titlework">Architecture Team Landing Page</h4>
              <h6 className="workdesc">
                This project is a clean and elegant landing page designed for an
                architecture team or firm that specializes in modern,
                sustainable, and innovative building solutions. The goal was to
                create a digital presence that showcases the team’s vision,
                expertise, and standout projects in a visually compelling way.
              </h6>
            </div>
            <div className="no-btns">
              <div className="no-btn">react</div>
              <div className="no-btn">figma</div>
              <div className="no-btn">javascript</div>
            </div>
          </div>
        </div>
        <div className="card cardright">
          <div className="description">
            <h4 className="titlework">Landing Page luxury outfit men</h4>
            <h6 className="workdesc">
              The project is a modern and visually appealing landing page
              designed to showcase and sell luxury men’s outfits online. The
              main goal is to create a premium digital experience that reflects
              elegance, exclusivity, and high-end fashion while driving customer
              interest and sales.
            </h6>

            <div className="no-btns">
              <div className="no-btn">react</div>
              <div className="no-btn">figma</div>
              <div className="no-btn">javascript</div>
            </div>
          </div>
          <img src="/src/assets/work2.png" alt="Project Image" />
        </div>
        <div className="card">
          <img src="/src/assets/work3.png" alt="Project Image" />
          <div className="description">
            <div className="content">
              <h4 className="titlework">MENA Voice</h4>
              <h6 className="workdesc">
                MENA VOICE is an AI-powered platform that helps MENA businesses
                automate calls, orders, appointments, customer support, and
                sales campaigns. Supporting Arabic and regional dialects, it
                reduces operational costs while improving efficiency and
                revenue.
              </h6>
            </div>
            <div className="no-btns">
              <div className="no-btn">react</div>
              <div className="no-btn">figma</div>
              <div className="no-btn">javascript</div>
            </div>
          </div>
        </div>
      </div>

      <button className="btnviewmywork" onClick={navigate}>
        View My Work's
      </button>
    </div>
  );
};

export default Works;
