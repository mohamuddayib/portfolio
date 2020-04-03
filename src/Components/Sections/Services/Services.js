import React from "react";
import "./Services.css";
import DesignIcon from "./ui-design.svg";
import DevelopIcon from "./web-development.svg";
import AppIcon from "./app-development.svg";
import EmailIcon from "./HTML-Email.svg";

const Services = props => {
  return (
    <div className="Services" id="section1">
      <div className="title-container">
        <h2>Services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia veniam
          asperiores.
        </p>
      </div>
      <div className="services-container">
        <div className="service-1">
          <img src={DesignIcon} alt="design" />
          <h4>Web design</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. atque quasi obcaecati adipisci
            anitationem natus quaerat?
          </p>
        </div>
        <div className="service-2">
          <img src={DevelopIcon} alt="develop" />
          <h4>Website development</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. atque quasi obcaecati adipisci
            anitationem natus quaerat?
          </p>
        </div>
        <div className="service-3">
          <img src={AppIcon} alt="App" />
          <h4>Web App development</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. atque quasi obcaecati adipisci
            anitationem natus quaerat?
          </p>
        </div>
        <div className="service-4">
          <img src={EmailIcon} alt="email" />
          <h4>HTML Email development</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. atque quasi obcaecati adipisci
            anitationem natus quaerat?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
