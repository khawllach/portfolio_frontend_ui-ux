import "./Listskills.css";
import react from "../../assets/react.png";
import tailwind from "../../assets/tailwind.jpg";
import python from "../../assets/python.jpg";
import figma from "../../assets/figma.png";
import Icon from "../Icon/Icon";
const Listskills = () => {
  return (
    <div className="container">
      <div className="list">
        <div className="card">
          <img src={react} alt="" className="cercleskill" />
          <div className="skill">
            <div className="rateskill">
              <h5 className="rate">React</h5>
              <div className="rate">50%</div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `50%` }}></div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={tailwind} alt="" className="cercleskill" />

          <div className="skill">
            <div className="rateskill">
              <h5 className="rate">Tailwind</h5>
              <div className="rate">50%</div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `50%` }}></div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={python} alt="" className="cercleskill" />
          <div className="skill">
            <div className="rateskill">
              <h5 className="rate">Python</h5>
              <div className="rate">50%</div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `50%` }}></div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={figma} alt="" className="cercleskill" />
          <div className="skill">
            <div className="rateskill">
              <h5 className="rate">Figma</h5>
              <div className="rate">50%</div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `50%` }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="iconcercle">
        <div className="icon icon1">
          <Icon name="react" size={40} />
        </div>
        <div className="icon icon2">
          <Icon name="figma" size={40} />
        </div>
        <div className="icon icon3">
          <Icon name="python" size={40} />
        </div>
        <div className="icon icon4">
          <Icon name="tailwind" size={40} />
        </div>
      </div>
    </div>
  );
};

export default Listskills;
