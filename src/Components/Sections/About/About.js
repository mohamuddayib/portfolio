import React from "react";
import "./About.css";
import Me from "./mohamud.jpg";

const About = () => {
  return (
    <div className="About">
      <div className="title-container">
        <h2>About me</h2>
      </div>
      <div className="AboutRow-1">
        <img src={Me} alt="mohamud" />
        <div className="about-content">
          <h4>Mohamud Jama</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, sit libero.
            Voluptatem repellendus consequatur adipisci nulla, ipsa ab nemo alias, corporis neque
            accusamus et debitis quisquam dignissimos vitae ratione. Tempora?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquid, asperiores
            minima reiciendis ducimus, sunt assumenda unde ut dolore error rem vero odit et eum
            nulla voluptatem autem consequatur non.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus culpa minus
            impedit soluta sit ipsam illum veritatis! Saepe non, ab delectus nihil, magnam, facilis
            repudiandae incidunt vitae deserunt debitis asperiores?
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
