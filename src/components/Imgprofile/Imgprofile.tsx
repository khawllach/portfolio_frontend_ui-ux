import "./Imgprofile.css";
import me from "../../assets/me.png";
import Button from "../Button/Button";

const Imgprofile = () => {
  return (
    <div className="imgprofile" id="home">
      <div className="cercle">
        <img src={me} alt="" className="me" />
      </div>
      <div className="titleofmyjob">
        <p className="title">
          Hi ,Im <p className="specialwords">Khawla</p>
        </p>

        <h4 className="subtitle">
          Im a <span className="specialwords">UI/UX Designer</span> &<br />
          <span className="specialwords">Frontend Dev</span>
        </h4>

        <p className="description">
          I Create a beautiful , responsive web experiences using Modern
          Technologies. <br /> Passionate about clean code and user-centered
          design <br />
          with clean code.
        </p>
      </div>
      <div className="buttons">
        <Button />
      </div>
    </div>
  );
};

export default Imgprofile;
