import React from "react";
import "./Fullscreen.css";
import Developer from "./developer-illustration.webp";

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
        <img src={Developer} alt="" />
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 340">
      <path
        fill="#66CCFF"
        fill-opacity="1"
        d="M0,320L48,304C96,288,192,256,288,229.3C384,203,480,181,576,186.7C672,192,768,224,864,213.3C960,203,1056,149,1152,106.7C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg> */}
    </div>
  );
};

export default Fullscreen;
