import styled, { css } from "styled-components";
import { scale } from "../Styles/Animation";

export const List = styled.ul`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  width: 100%;
  list-style: none;
  ${(props) =>
    props.fixed &&
    css`
      ${scale}
      transform: scale(0.8);
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: 0;
      right: 0;
      margin: 0 auto;
      max-width: 400px;
      padding: 5px;
      position: fixed;
      top: -5px;
      z-index: 1;
    `}/* &.fixed {
    ${scale}
    transform: scale(0.8);
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    top: -15px;
    z-index: 1;
  } */
`;

export const Item = styled.li`
  padding: 0px 8px 8px 0px;
`;
