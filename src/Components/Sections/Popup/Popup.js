import React from "react";
import "./Popup.css";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";
import { mdiSend } from '@mdi/js';

const Popup = props => {
  return (
    <div className="Popup">
      <div className="formWrapper">
        <Icon
          onClick={props.close}
          className="close-icon"
          path={mdiClose}
          title="Close"
          size={1.1}
        />
        <form action="">
          <div>
            <span>
              <label>Name</label>
              <input type="text" />
            </span>
            <span>
              <label>Email</label>
              <input type="email" />
            </span>
          </div>
          <div>
            <span>
              <label>Phone Number</label>
              <input type="number"/>
            </span>
            <span>
              <label>Company Name (Optional)</label>
              <input type="text" />
            </span>
          </div>
          <div>
            <span>
              <label>Country</label>
              <select>
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
              <label>Estimated Budget</label>
              <select>
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
              <label>Duration of project</label>
              <select>
                <option> Select days</option>
                <option> 4 days</option>
                <option> 7 days</option>
                <option> 10 days</option>
                <option> 14 days</option>
              </select>
            </span>
          </div>
          <div>
            <span>
              <label>Message</label>
              <textarea></textarea>
              <button type="submit">Send Message</button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Popup;
