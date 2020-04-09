import React from "react";
import "./Contact.css";
import Icon from "@mdi/react";
import { mdiPhoneOutline } from "@mdi/js";
import { mdiEmailOutline } from "@mdi/js";
import { mdiMapMarker } from "@mdi/js";
import { mdiAlarm } from "@mdi/js";
import { mdiTelegram } from "@mdi/js";
import { mdiFacebook } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";
import { mdiTwitter } from "@mdi/js";
import { mdiInstagram } from "@mdi/js";
const Contact = () => {
  return (
    <div className="contact" id="Contact">
      <div className="title-container">
        <h2>Contact me</h2>
        <p>
          Whether you have a question about features, pricing, or anything else,
          I'm always ready to answer all your questions
        </p>
      </div>
      <div className="contact-container">
        <div className="info">
          <h3>Get in touch</h3>
          <div className="contact-info">
            <span>
              <Icon path={mdiEmailOutline} size={1} color="#fff" />
              info@mohamud.dev
            </span>
            <span>
              <Icon path={mdiPhoneOutline} size={1} color="#fff" />
              +252615374336
            </span>
            <span>
              <Icon path={mdiMapMarker} size={1} color="#fff" />
              Kismayo, Lower Jubba , Somalia
            </span>
            <span>
              <Icon path={mdiAlarm} size={1} color="#fff" />
              Sat-Thurs, 7:00AM -9:00PM
            </span>
            <div className="contact-social">
              <span>
                <a href="http://mohamud.dev/">
                  <Icon path={mdiLinkedin} size={1} color="#fff" />
                </a>
              </span>
              <span>
                <a href="http://mohamud.dev/">
                  <Icon path={mdiFacebook} size={1} color="#fff" />{" "}
                </a>
              </span>
              <span>
                <a href="http://mohamud.dev/">
                  <Icon path={mdiTwitter} size={1} color="#fff" />{" "}
                </a>
              </span>
              <span>
                <a href="http://mohamud.dev/">
                  <Icon path={mdiInstagram} size={1} color="#fff" />
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="Contactform-wrapper">
          <h3>Let's talk</h3>
          <form action="">
            <div>
              <span>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Name" />
              </span>
              <span>
                <label htmlFor="name">Email</label>
                <input type="email" placeholder="Email" />
              </span>
            </div>
            <div>
              <span>
                <label htmlFor="name">Phone</label>
                <input type="Number" placeholder="Phone Number" />
              </span>
              <span>
                <label htmlFor="name">Company (optional)</label>
                <input type="Company" placeholder="Company Name" />
              </span>
            </div>
            <div>
              <span className="textarea">
                <label htmlFor="name">Message</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Message"
                ></textarea>
              </span>
            </div>
            <button type="submit">
              Send Message
              <Icon path={mdiTelegram} size={0.8} color="#fff" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
