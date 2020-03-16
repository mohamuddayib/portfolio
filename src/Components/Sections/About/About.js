import React from "react";
import "./About.css";
import Me from "./mohamud.png";


const About = () => {
  return (
    <div className="About" id="About">
      <div className="title-container">
        <h2>About me</h2>
      </div>
      <div className="AboutRow-1">
        <div className="image-container"><img src={Me} alt="mohamud" /></div>
        <div className="about-content">
          <h4>Mohamud Jama</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, sit libero.
            Voluptatem repellendus consequatur adipisci nulla, ipsa ab nemo alias, corporis neque
            accusamus et debitis quisquam dignissimos vitae ratione. Tempora?
          </p>
        </div>
      </div>
      <div className="AboutRow-2">
        <div className="activities"></div>
        <div className="proffesional"></div>
      </div>
    </div>
  );
};
export default About;
