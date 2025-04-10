import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loading">
        <div className="loading-wide">
          <div className="l1 color" />
          <div className="l2 color" />
          <div className="e1 color animation-effect-light" />
          <div className="e2 color animation-effect-light-d" />
          <div className="e3 animation-effect-rot">X</div>
          <div className="e4 color animation-effect-light" />
          <div className="e5 color animation-effect-light-d" />
          <div className="e6 animation-effect-scale">*</div>
          <div className="e7 color" />
          <div className="e8 color" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loading-wide {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .color {
    background-color: #261fb3; /* Google Blue */
  }

  .l1 {
    width: 15px;
    height: 65px;
    position: absolute;
    animation: move-h 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
    background-color: #f6dc43; /* Google Yellow */
  }

  .l2 {
    width: 15px;
    height: 60px;
    position: absolute;
    transform: rotate(90deg);
    animation: move-v 1.2s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
    background-color: #ba68c8; /* Google Red */
  }

  @keyframes move-h {
    0% {
      top: 0;
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      top: 30%;
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      top: 100%;
      opacity: 0;
    }
  }

  @keyframes move-v {
    0% {
      left: 0;
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      left: 45%;
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      left: 100%;
      opacity: 0;
    }
  }

  .animation-effect-light {
    animation: effect 0.2s 0.1s infinite linear;
  }
  .animation-effect-light-d {
    animation: effect 0.3s 0.2s infinite linear;
  }
  .animation-effect-rot {
    animation: rot 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
  }
  .animation-effect-scale {
    animation: scale 0.8s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
  }

  @keyframes effect {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes rot {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes scale {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.9;
    }
    100% {
      scale: 1;
    }
  }

  .e1 {
    width: 1px;
    height: 40px;
    opacity: 0.3;
    position: absolute;
    top: 0;
    left: 8%;
    background-color: #0f9d58; /* Google Green */
  }

  .e2 {
    width: 60px;
    height: 1px;
    opacity: 0.8;
    position: absolute;
    top: 8%;
    left: 0;
    background-color: #4285f4; /* Google Blue */
  }

  .e3 {
    position: absolute;
    top: 10%;
    left: 12%;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 900;
    font-size: 18px;
    color: #4285f4; /* Google Blue */
  }

  .e4 {
    width: 1px;
    height: 40px;
    opacity: 0.3;
    position: absolute;
    top: 90%;
    right: 10%;
    background-color: #db4437; /* Google Red */
  }

  .e5 {
    width: 40px;
    height: 1px;
    opacity: 0.3;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #f4b400; /* Google Yellow */
  }

  .e6 {
    position: absolute;
    top: 100%;
    right: 0;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 32px;
    color: #0f9d58; /* Google Green */
  }

  .e7 {
    width: 1px;
    height: 20px;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: rotate(45deg);
    animation: height 1s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
    background-color: #f4b400; /* Google Yellow */
  }

  @keyframes height {
    0% {
      bottom: 0%;
      left: 0%;
      height: 0px;
    }
    25% {
      height: 90px;
    }
    50% {
      bottom: 100%;
      left: 100%;
      height: 90px;
    }
    75% {
      height: 0px;
    }
    100% {
      bottom: 0%;
      left: 0%;
      height: 0px;
    }
  }

  .e8 {
    width: 20px;
    height: 1px;
    position: absolute;
    bottom: 50%;
    left: 0;
    animation: width 1.5s infinite cubic-bezier(0.65, 0.05, 0.36, 1);
    background-color: #0f9d58; /* Google Green */
  }

  @keyframes width {
    0% {
      left: 0%;
      width: 0px;
    }
    50% {
      left: 100%;
      width: 90px;
    }
    100% {
      left: 0%;
      width: 0px;
    }
  }
`;

export default Loader;