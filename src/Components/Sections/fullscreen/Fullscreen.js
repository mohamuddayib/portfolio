import React from "react";
import "./Fullscreen.css";
import Developer from "./developer-illustration.webp";
import Mouse from "../mouse/mouse";

const Fullscreen = () => {
  return (
    <div className="Fullscreen">
      <div className="wrapper">
        <div className="content-container">
          <h2>Web developer</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem at aliquid amet aperiam
            facilis explicabo aspernatur assumenda dicta nihil perferendis quaerat, eum quidem rem
            consectetur cupiditate inventore sapiente culpa adipisci!
          </p>
          <button>Request a quote</button>
        </div>
        <div className="image-container">
        <img src={Developer} alt="" />
        </div>
      </div>
      <Mouse/>
    </div>
  );
};

export default Fullscreen;
