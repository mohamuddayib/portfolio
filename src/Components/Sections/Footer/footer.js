import React from "react";
import "./footer.css";
import FooterWave from "./footer-wave.svg";
import MasterCard from "./MasterCard.svg";
import VisaCard from "./visa.webp";
import Paypal from "./paypal.svg";
import Icon from "@mdi/react";
import { mdiEmailOutline } from "@mdi/js";
import { mdiMapMarker } from "@mdi/js";
import { mdiPhoneOutline } from "@mdi/js";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="Footer">
      <img src={FooterWave} alt="wave" className="footer-wave" />
      <div className="footer-content">
        <div>
          <h3>About Me</h3>
          <p>
            My mission is to create custom websites and marketing plans for
            businesses of all varieties. Regardless of your size, you should
            have a website that speaks your ideas and helps you grow.
          </p>
        </div>
        <div className="importanLinks">
          <h3>Important Links</h3>
          <span>
            <Link
              activeClass="Footer-menu"
              to="section1"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              Services
            </Link>
          </span>
          <span>
            <Link to="About" spy={true} smooth={true} offset={0} duration={700}>
              About
            </Link>
          </span>
          <span>
            <Link
              activeClass="Footer-menu"
              to="Pricing"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              Pricing
            </Link>
          </span>
          <span>
            <Link
              activeClass="Footer-menu"
              to="Project"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              Project
            </Link>
          </span>
          <span>
            <Link
              activeClass="Footer-menu"
              to="Contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              Contact
            </Link>
          </span>
        </div>
        <div className="support footer-info">
          <h3>Support</h3>
          <span>
            <Icon path={mdiEmailOutline} size={1} color="#fff" />
            Support@mohamud.dev
          </span>
          <span>
            <Icon path={mdiPhoneOutline} size={1} color="#fff" />
            +2527617758011
          </span>
          <span>
            <Icon path={mdiMapMarker} size={1} color="#fff" />
            Kismayo, LowerJuba , Somalia
          </span>
        </div>
        <div className="support Paypment">
          <h3>Payment</h3>
          <span>
            <img src={Paypal} alt="paypal" /> Paypal
          </span>
          <span>
            <img src={MasterCard} alt="mastercard" />
            Mastercard
          </span>
          <span>
            <img src={VisaCard} alt="VISA" />
            Visacard
          </span>
        </div>
      </div>
      <footer>Copyrights © 2020. All rights reserved</footer>
    </footer>
  );
};
export default Footer;
