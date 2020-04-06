import React from "react";
import "./About.css";
import Me from "./mohamud.webp";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <div className="About" id="About">
      <div className="title-container">
        <h2>About me</h2>
      </div>
      <div className="AboutRow-1">
        <div className="image-container">
          <img src={Me} alt="mohamud" />
        </div>
        <div className="about-content">
          <h3>Mohamud Ali</h3>
          <p className="position">Web developer and designer</p>
          <p>
            I'm Mohamud, I'm a web developer and designer based in Kismayo,
            Somalia. I have been working this industry over the last couple of
            years and I've experience of the latest technologies both as a
            framework and vanilla programming language.
          </p>
          <h4>Featured skills</h4>
          <ScrollAnimation animateIn="wobble">
            {/* HTML SKILL */}
            <div className="skill">
              <div className="title-skill">
                <span>HTML5</span>
                <span className="percentage">90%</span>
              </div>
              <div className="fill-container">
                <div className="fill-html"></div>
              </div>
            </div>
            {/* CSS SKILL */}
            <div className="skill">
              <div className="title-skill">
                <span>CSS3</span>
                <span className="percentage">90%</span>
              </div>
              <div className="fill-container">
                <div className="fill-css"></div>
              </div>
            </div>
            {/* JS SKILL */}
            <div className="skill">
              <div className="title-skill">
                <span>Javascript</span>
                <span className="percentage">80%</span>
              </div>
              <div className="fill-container">
                <div className="fill-js"></div>
              </div>
            </div>
            {/* CSS SKILL */}
            <div className="skill">
              <div className="title-skill">
                <span>React.js</span>
                <span className="percentage">70%</span>
              </div>
              <div className="fill-container">
                <div className="fill-react"></div>
              </div>
            </div>
            {/* CSS SKILL */}
            <div className="skill">
              <div className="title-skill">
                <span>Node.js</span>
                <span className="percentage">60%</span>
              </div>
              <div className="fill-container">
                <div className="fill-flutter"></div>
              </div>
            </div>
            {/* CSS SKILL */}
            <div className="skill">
              <div className="title-skill">
                <span>Wordpress(CMS)</span>
                <span className="percentage">90%</span>
              </div>
              <div className="fill-container">
                <div className="fill-wp"></div>
              </div>
            </div>
          </ScrollAnimation>
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
