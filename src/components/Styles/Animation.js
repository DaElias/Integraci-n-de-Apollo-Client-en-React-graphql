import styled, { keyframes, css } from "styled-components";
const fadeInKeyframes = keyframes`
  from{
    filter: blur(4px);
    opacity: 0;
  }
  to{
    filter: blur(0);
    opacity: 1;
  }
`;
export const fadeIn = ({ time = "1s", type = "ease" }) => css`
  animation: ${time} ${fadeInKeyframes} ${type};
`;

const scaleDown = keyframes`
    from {
      transform: scale(1);
      transform: translate(0px, -100px);
    }
    to {
      transform: scale(0.8);
    }
`;
export const scale = ({ time = "1s", type = "ease" }) =>
  css`
    animation: ${time} ${scaleDown} ${type};
  `;

const girar = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  width: 70px;
  height: 70px;
  border: 10px solid #eee;
  border-top: 10px solid #85a2b6;
  border-radius: 50%;
  animation-name: ${girar};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
