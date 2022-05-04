import styled from "styled-components";
import { fadeIn } from "../Styles/Animation";

export const Ancor = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`;

export const Image = styled.img`
${fadeIn({})}
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  height: auto;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
`;

export const PlaceHolder = styled.div`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  height: auto;
  border-radius: 50%;
  overflow: hidden;
  height: 75px;
  width: 75px;
  background-color: gray;
`;
