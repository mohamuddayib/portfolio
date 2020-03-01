import React, { Component } from "react";
import "./Nav.css";
import Logo from "./Logo.png";
import Icon from "@mdi/react";
import { mdiLinkedin } from "@mdi/js";
import { mdiFacebook } from "@mdi/js";
import { mdiTwitter } from "@mdi/js";
import { mdiInstagram } from "@mdi/js";

class Nav extends Component {
  render() {
    return (
      <header className="Nav">
        <div className="brand">
          <a href="https://www.mohamud.dev/">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        {/* menu */}
        <nav>
          <ul>
            <li>
              <a href="https://www.mohamud.dev/">Services</a>
            </li>
            <li>
              <a href="https://www.mohamud.dev/">About</a>
            </li>
            <li>
              <a href="https://www.mohamud.dev/">Project</a>
            </li>
            <li>
              <a href="https://www.mohamud.dev/">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="social-top">
          <a href="https://www.linkedin.com/" title="linkedIn">
            <Icon path={mdiLinkedin} size={1} color="#fff" />
          </a>
          <a href="https://www.linkedin.com/" title="Facebook">
            <Icon path={mdiFacebook} size={1} color="#fff" />
          </a>
          <a href="https://www.linkedin.com/" title="Twitter">
            <Icon path={mdiTwitter} size={1} color="#fff" />
          </a>
          <a href="https://www.linkedin.com/" title="Instagram">
            <Icon path={mdiInstagram} size={1} color="#fff" />
          </a>
        </div>
      </header>
    );
  }
}

export default Nav;
