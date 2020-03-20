import React from "react";
import "./success.css";
import SuccessImage from "./sucess.svg";
import Icon from "@mdi/react";
import { mdiCheckboxMarkedCircle } from "@mdi/js";
import { Link } from "react-router-dom";

const Sucess = () => {
  return (
    <div className="success">
      <div className="submit-sucess">
        <img src={SuccessImage} alt="illusteration" />
        <Icon path={mdiCheckboxMarkedCircle} size={1.5} color="#20C98B" className="marcked" />
        <h2>Your Submission was rescieved</h2>
        <p>Thanks for the message</p>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span> Back to Home </span>
        </Link>
      </div>
    </div>
  );
};
export default Sucess;
