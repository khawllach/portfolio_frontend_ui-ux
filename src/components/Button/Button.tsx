import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Button.css";

const Button = () => {
  return (
    <div className="buttons">
      <div className="btnviewmywork">
        <AnchorLink href="#works">
          <button className="button">View My Work</button>
        </AnchorLink>
      </div>
      <a href="/Cv.pdf" download="Khawla_CV.pdf">
        <button className="btndwcv">Download CV</button>
      </a>
    </div>
  );
};

export default Button;
