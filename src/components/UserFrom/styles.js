import styled from "styled-components";
import { css } from "styled-components";
import { fadeIn } from "../Styles/Animation";
export const Form = styled.form`
  padding: 16px 0;
  width: 100%;

`;
export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 98%;
  ${(props) =>
    props.validate &&
    css`
      ${fadeIn({ time: ".2s" })}
      border-bottom: 2px solid red;
      box-shadow: -5px 4px 12px -10px red;
    `}
`;
export const Button = styled.button`
  ${fadeIn({ time: "1s" })}
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  ${(props) =>
    props.disabled &&
    css`
      background: #95a5a6;
    `}
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
