import React from "react";
import "./Services.css";
import DesignIcon from "./ui-design.svg";
import DevelopIcon from "./web-development.svg";
import AppIcon from "./app-development.svg";
import EmailIcon from "./HTML-Email.svg";

const Services = (props) => {
  return (
    <div className="Services" id="section1">
      <div className="title-container">
        <h2>Services</h2>
        <p>
          From small business website designs to large, enterprise-level
          projects, I have a custom solution for your company.
        </p>
      </div>
      <div className="services-container">
        <div className="service-1">
          <img src={DesignIcon} alt="design" />
          <h4>Web design</h4>
          <p>
            I design websites that result in performance and profitability. my
            unique design skills combines an entrepreneurial mindset, a knack
            for creative solutions.
          </p>
        </div>
        <div className="service-2">
          <img src={DevelopIcon} alt="develop" />
          <h4>Website development</h4>
          <p>
            I develop responisve and dynamic custom websites using both vanilla
            programming technologies and content managamnet sytem such Wordoress
            and Magento.
          </p>
        </div>
        <div className="service-3">
          <img src={AppIcon} alt="App" />
          <h4>Web App development</h4>
          <p>
            I develop custom web applications such as e-commerce and Customer
            Relationship Managmet (CRM) with effecient quality and unique
            design.
          </p>
        </div>
        <div className="service-4">
          <img src={EmailIcon} alt="email" />
          <h4>HTML Email development</h4>
          <p>
            I develop responsive HTML email that supports all modern email
            clients that enhances good communication and marketing solution .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
