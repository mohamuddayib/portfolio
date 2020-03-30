import React from "react";
import "./Contact.css";
import Icon from "@mdi/react";
import { mdiPhone } from "@mdi/js";
import { mdiEmail } from "@mdi/js";
import { mdiMapMarker } from "@mdi/js";
import { mdiAlarm } from "@mdi/js";
import { mdiTelegram } from "@mdi/js";
import { mdiFacebook } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";
import { mdiTwitter } from "@mdi/js";
import { mdiInstagram } from "@mdi/js";
const Contact = () => {
  return (
    <div className="contact">
      <div className="title-container">
        <h2>Contact me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia veniam
          asperiores.
        </p>
      </div>
      <div className="contact-container">
        <div className="info">
          <h3>Let's talk</h3>
          <div>
            <span>
              <Icon path={mdiEmail} size={1} color="#fff" />
              Email
            </span>
            <span>
              <Icon path={mdiPhone} size={1} color="#fff" />
              Phone
            </span>
            <span>
              <Icon path={mdiMapMarker} size={1} color="#fff" />
              Address
            </span>
            <span>
              <Icon path={mdiAlarm} size={1} color="#fff" />
              Working hours
            </span>
            <div>
              <span>
                <Icon path={mdiLinkedin} size={1} color="#fff" />
              </span>
              <span>
                <Icon path={mdiFacebook} size={1} color="#fff" />
              </span>
              <span>
                <Icon path={mdiTwitter} size={1} color="#fff" />
              </span>
              <span>
                <Icon path={mdiInstagram} size={1} color="#fff" />
              </span>
            </div>
          </div>
        </div>
        <div className="Contactform-wrapper">
          <h3>Get in touch</h3>
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
              <span>
                <label htmlFor="name">Message</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </span>
            </div>
            <button type="submit">
              <Icon path={mdiTelegram} size={1} color="" />
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
