import React from "react";
import "./Sidedrow.css";
import SlideLogo from "./Logo-scroll.png";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { Link } from "react-scroll";

const Sidedrow = props => {
  let siderawClasses = "side-Drawer";
  if (props.open) {
    siderawClasses = "side-Drawer open";
  }
  return (
    <div className={siderawClasses}>
      <div className="slide-header">
        <a href="http://mohamud.dev" className="logo-container">
          <img src={SlideLogo} alt="logo" />
        </a>
        <Icon
          className="close-icon"
          path={mdiClose}
          title="Close"
          size={1.1}
          onClick={props.close}
        />
      </div>
      <nav>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="Pricing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Pricing
            </Link>
          </li>
          <li>Projects</li>
        </ul>
      </nav>
      <div className="ctaContact">
        <button>Contact</button>
      </div>
    </div>
  );
};

export default Sidedrow;
