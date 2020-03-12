import React, { Component } from "react";
import "./Nav.css";
import Logo from "./Logo.png";
import LogoScroll from "./Logo-scroll.png";
import Icon from "@mdi/react";
import { mdiLinkedin } from "@mdi/js";
import { mdiFacebook } from "@mdi/js";
import { mdiTwitter } from "@mdi/js";
import { mdiInstagram } from "@mdi/js";
import { Link } from "react-scroll";

class Nav extends Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY;
      const nav = document.getElementById("nav");
      const menu = document.querySelectorAll("header li");
      const Logo = document.querySelector(".logo");
      const LogoScroll = document.querySelector(".logoScroll");
      const scialDefault = document.querySelector(".social-default");
      const scialScroll = document.querySelector(".social-scroll");
      const Toggle = document.querySelector(".toggle");

      menu.forEach(element => {
        if (isTop > 50) {
          element.classList.add("newMenu");
        }
        if (isTop < 50) {
          element.classList.remove("newMenu");
        }
      });

      if (isTop > 50) {
        nav.classList.add("scrolled");
        Logo.classList.add("logo-default");
        LogoScroll.classList.add("logo-scroll");
        scialDefault.classList.add(".social-default-1");
        scialScroll.classList.add(".social-scroll-1");
        Toggle.classList.add("toggle-scroll");
      } else {
        nav.classList.remove("scrolled");
        Logo.classList.remove("logo-default");
        LogoScroll.classList.remove("logo-scroll");
        scialDefault.classList.remove("social-default-1");
        scialScroll.classList.remove("social-scroll-1");
        Toggle.classList.remove("toggle-scroll");
      }
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }
  render() {
    return (
      <header id="nav" className="Nav">
        <div className="brand">
          <a href="https://www.mohamud.dev/">
            <img className="logo" src={Logo} alt="logo" />
            <img className="logoScroll" src={LogoScroll} alt="logo" />
          </a>
        </div>
        {/* menu */}
        <nav>
          <ul>
            <li>
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                activeClass=""
                to="section1"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
              >
                Pricing
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                className="menu-link"
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={0}
                duration={700}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="social-default">
          <a href="https://www.linkedin.com/" title="linkedIn">
            <Icon path={mdiLinkedin} size={1} color="#ffff" />
          </a>
          <a href="https://www.linkedin.com/" title="Facebook">
            <Icon path={mdiFacebook} size={1} color="#ffff" />
          </a>
          <a href="https://www.linkedin.com/" title="Twitter">
            <Icon path={mdiTwitter} size={1} color="#ffff" />
          </a>
          <a href="https://www.linkedin.com/" title="Instagram">
            <Icon path={mdiInstagram} size={1} color="#ffff" />
          </a>
        </div>
        <div className="social-scroll">
          <a href="https://www.linkedin.com/" title="linkedIn">
            <Icon path={mdiLinkedin} size={1} color="#0077B5" />
          </a>
          <a href="https://www.linkedin.com/" title="Facebook">
            <Icon path={mdiFacebook} size={1} color="#3B5998" />
          </a>
          <a href="https://www.linkedin.com/" title="Twitter">
            <Icon path={mdiTwitter} size={1} color="#1DA1F2" />
          </a>
          <a href="https://www.linkedin.com/" title="Instagram">
            <Icon path={mdiInstagram} size={1} color="#A92EB9" />
          </a>
        </div>
        <div className="toggle" onClick={this.props.show}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>
    );
  }
}

export default Nav;
