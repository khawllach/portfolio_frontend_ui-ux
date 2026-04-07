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
      <div className="btndwcv">
        <button className="button">Download CV</button>
      </div>
    </div>
  );
};

export default Button;
