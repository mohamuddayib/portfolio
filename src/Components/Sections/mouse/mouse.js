import React from "react";
import "./mouse.css";
import styled, { keyframes } from "styled-components";
import { fadeOutDown } from "react-animations";

const bounceAnimation = keyframes`${fadeOutDown}`;
const BouncyDiv = styled.div`
  animation: 2s ${bounceAnimation} infinite;
`;

const Mouse = () => {
  return (
    <div className="Mouse">
      <BouncyDiv>
        <div className="circle"></div>
      </BouncyDiv>
    </div>
  );
};
export default Mouse;
