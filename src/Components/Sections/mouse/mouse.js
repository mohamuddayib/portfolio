import React from "react";
import "./mouse.css";
import styled, { keyframes } from "styled-components";
import { fadeOutDown } from "react-animations";
import { Link } from "react-scroll";

const bounceAnimation = keyframes`${fadeOutDown}`;
const BouncyDiv = styled.div`
  animation: 2s ${bounceAnimation} infinite;
`;

const Mouse = () => {
  return (
    <div className="Mouse-container">
      <Link activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>
        <div className="Mouse">
          <BouncyDiv>
            <div className="circle"></div>
          </BouncyDiv>
        </div>
      </Link>
    </div>
  );
};
export default Mouse;
