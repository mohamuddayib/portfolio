import React from "react";
import "./footer.css";
import FooterWave from "./footer-wave.svg";

const Footer = () => {
  return (
      <footer className="Footer">
        <img src={FooterWave} alt="wave"/>
        <div className="footer-content">
            <div></div>
            <div></div>
            <div></div>
        </div>
        <footer>Copyrights © 2020. All rights reserved by Mohamud Ali</footer>
      </footer>
  );
};
export default Footer;
