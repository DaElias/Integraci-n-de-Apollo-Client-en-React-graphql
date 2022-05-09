import styled, { css } from "styled-components";
import { fadeIn } from "../Styles/Animation";


export const Info = styled.div`
  background-color: red;
  color: white;
  text-align: center;
  padding: 5px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 20px;
  box-shadow: 1px 5px 0px #c70039;
  margin-bottom: 20px;
  ${(props) =>
    props.alert &&
    css`
      background: none;
      color: red;
      box-shadow: none;
      font-size: 15px;
      margin-bottom: 0px;
    `}
  ${fadeIn()}
`;
