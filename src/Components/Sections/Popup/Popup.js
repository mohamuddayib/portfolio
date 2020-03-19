import React from "react";
import "./Popup.css";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

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
      </div>
    </div>
  );
};
export default Popup;
