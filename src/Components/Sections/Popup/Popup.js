import React from "react";
import "./Popup.css";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { mdiTelegram } from "@mdi/js";
import { withRouter } from "react-router-dom";
import { Component } from "react";

class Popup extends Component {

  submitForm(e) {
    // e.preventDefault();
    this.props.history.push("/Thank-you");
  }

  render() {
    return (
      <div className="Popup">
        <div className="formWrapper">
          <Icon
            onClick={this.props.close}
            className="close-icon"
            path={mdiClose}
            title="Close"
            size={1.1}
          />
          <form name="contact" method="POST" onSubmit={this.submitForm.bind(this)}>
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <span>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Your Name" required/>
              </span>
              <span>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Your Email" />
              </span>
            </div>
            <div>
              <span>
                <label htmlFor="number">Phone Number</label>
                <input type="number" name="number" placeholder="Your Phone Number" required/>
              </span>
              <span>
                <label htmlFor="company">Company Name (Optional)</label>
                <input type="text" name="company" placeholder="Your Company Name" />
              </span>
            </div>
            <div>
              <span>
                <label htmlFor="country">Country</label>
                <select name="country">
                  <option>Select Country</option>
                  <option>Somalia</option>
                  <option>Djibouti</option>
                  <option>Kenya</option>
                  <option>Ethopia</option>
                  <option>Sudan</option>
                  <option>Uganda</option>
                  <option>South Africa</option>
                  <option>Turkey</option>
                  <option>Yamen</option>
                  <option>Saudi Arabia</option>
                  <option>United Arab Emirates</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>Netherlands</option>
                </select>
              </span>
              <span>
                <label>Project type</label>
                <select>
                  <option>Select project type</option>
                  <option>Personal</option>
                  <option>Business</option>
                  <option>Enterprise</option>
                </select>
              </span>
            </div>
            <div>
              <span>
                <label htmlFor="Amount">Estimated Budget</label>
                <select name="Amount">
                  <option> Select Amount</option>
                  <option> Below $200</option>
                  <option> $200 - $400</option>
                  <option> $400 - $600</option>
                  <option> $600 - $800</option>
                  <option> $800 - $1000</option>
                  <option> Above $1000</option>
                </select>
              </span>
              <span>
                <label htmlFor="Duration">Duration of project</label>
                <select name="Duration">
                  <option> Select days</option>
                  <option> 4 days</option>
                  <option> 7 days</option>
                  <option> 10 days</option>
                  <option> 14 days</option>
                </select>
              </span>
            </div>
            <div className="textarea">
              <span>
                <label htmlFor="message">Message</label>
                <textarea name="message" placeholder="Enter your Message here"></textarea>
                <button type="submit" name="submit">
                  Send Message <Icon path={mdiTelegram} size={0.7} color="#ffff" className="send" />
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(Popup);
