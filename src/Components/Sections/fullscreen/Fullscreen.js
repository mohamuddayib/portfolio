import React, { Component } from "react";
import "./Fullscreen.css";
import Developer from "./developer-illustration.webp";
import Mouse from "../mouse/mouse";
import Popup from "../Popup/Popup";

class Fullscreen extends Component {
  state = {
    showpopup: false
  };
  showPopupHandler = () => {
    const currentState = this.state.showpopup;
    this.setState({ showpopup: !currentState });
  };
  HidePopupHandler = () => {
    this.setState({ showpopup: false });
  };
  render() {
    let Overlay;
    if (this.state.showpopup) {
      Overlay = <Popup close={this.HidePopupHandler} />;
    }
    return (
      <div className="Fullscreen">
        <div className="wrapper">
          <div className="content-container">
            <h2>Web developer</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem at aliquid amet
              aperiam facilis explicabo aspernatur assumenda dicta nihil perferendis.
            </p>
            <button onClick={this.showPopupHandler}>Request a quote</button>
          </div>
          <div className="image-container">
            <img src={Developer} alt="" />
          </div>
        </div>
        <Mouse />
        {Overlay}
      </div>
    );
  }
}

export default Fullscreen;
