import React, { Component } from "react";
import "./Nav.css";
import Logo from "./Logo.png";
import Icon from "@mdi/react";
import { mdiLinkedin } from "@mdi/js";
import { mdiFacebook } from "@mdi/js";
import { mdiTwitter } from "@mdi/js";
import { mdiInstagram } from "@mdi/js";
import { mdiMenu } from '@mdi/js';

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
              <a href="https://www.mohamud.dev/">Pricing</a>
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
            <Icon path={mdiLinkedin} size={0.8} color="#ffff" />
          </a>
          <a href="https://www.linkedin.com/" title="Facebook">
            <Icon path={mdiFacebook} size={0.8} color="#ffff" />
          </a>
          <a href="https://www.linkedin.com/" title="Twitter">
            <Icon path={mdiTwitter} size={0.8} color="#ffff" />
          </a>
          <a href="https://www.linkedin.com/" title="Instagram">
            <Icon path={mdiInstagram} size={0.8} color="#ffff" />
          </a>
        </div>
        <Icon className="hamburger" path={mdiMenu} size={1.2} color="#ffff"/>
      </header>
    );
  }
}

export default Nav;
