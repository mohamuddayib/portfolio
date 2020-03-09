import React from "react";
import "./Sidedrow.css";

const Sidedrow = props => {
  let siderawClasses = "side-Drawer";
  if (props.open) {
    siderawClasses = "side-Drawer open";
  }
  return (
    <div className={siderawClasses}>
      <div></div>
    </div>
  );
};

export default Sidedrow;
