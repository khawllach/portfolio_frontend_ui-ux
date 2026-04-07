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
      <div className="worklist">
        <div className="header">
          <h1 className="my-work">My Works</h1>
          <h3 className="sub-my-work">A Collection of my recent Projects</h3>
        </div>
        <div className="works">
          <div className="cards">
            <div className="photo"></div>
            <div className="content">
              <h4 className="titlework">Weather Dashboard</h4>
              <h6 className="workdesc">
                A simple weather application with location-based forecasts.build
                team a Weather Dashboard jshsjkjs nknkkalflgl
              </h6>
            </div>
            <div className="no-btns">
              <div className="no-btn">react</div>
              <div className="no-btn">figma</div>
              <div className="no-btn">javascript</div>
            </div>
          </div>
          <div className="cards">
            <div className="photo"></div>
            <div className="content">
              <h4 className="titlework">Weather Dashboard</h4>
              <h6 className="workdesc">
                A simple weather application with location-based forecasts.build
                team a Weather Dashboard jshsjkjs nknkkalflgl
              </h6>
            </div>
            <div className="no-btns">
              <div className="no-btn">react</div>
              <div className="no-btn">figma</div>
              <div className="no-btn">javascript</div>
            </div>
          </div>
          <div className="cards">
            <div className="photo"></div>
            <div className="content">
              <h4 className="titlework">Weather Dashboard</h4>
              <h6 className="workdesc">
                A simple weather application with location-based forecasts.build
                team a Weather Dashboard jshsjkjs nknkkalflgl
              </h6>
            </div>
            <div className="no-btns">
              <div className="no-btn">react</div>
              <div className="no-btn">figma</div>
              <div className="no-btn">javascript</div>
            </div>
          </div>
          <div className="cards">
            <div className="photo"></div>
            <div className="content">
              <h4 className="titlework">Weather Dashboard</h4>
              <h6 className="workdesc">
                A simple weather application with location-based forecasts.build
                team a Weather Dashboard jshsjkjs nknkkalflgl
              </h6>
            </div>
            <div className="no-btns">
              <div className="no-btn">react</div>
              <div className="no-btn">figma</div>
              <div className="no-btn">javascript</div>
            </div>
          </div>
          <div className="cards">
            <div className="photo"></div>
            <div className="content">
              <h4 className="titlework">Weather Dashboard</h4>
              <h6 className="workdesc">
                A simple weather application with location-based forecasts.build
                team a Weather Dashboard jshsjkjs nknkkalflgl
              </h6>
            </div>
            <div className="no-btns">
              <div className="no-btn">react</div>
              <div className="no-btn">figma</div>
              <div className="no-btn">javascript</div>
            </div>
          </div>
          <div className="cards">
            <div className="photo"></div>
            <div className="content">
              <h4 className="titlework">Weather Dashboard</h4>
              <h6 className="workdesc">
                A simple weather application with location-based forecasts.build
                team a Weather Dashboard jshsjkjs nknkkalflgl
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
      <div className="btnviewmywork-2">
        <button className="button" onClick={navigate}>
          View My Work
        </button>
      </div>
    </div>
  );
};

export default Works;
