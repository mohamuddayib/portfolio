import React from "react";
import "./Backdrow.css";

const Backdrow = (props) => {
  return <div className="Backdrow" onClick={props.close}></div>;
};

export default Backdrow;
