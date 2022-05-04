import React from "react";
import { Button } from "../PhotoCard/styles";
import { ButtonLiked } from "../Styles/componentStyled";

const FavButtom = ({ likes = 0, likedd = false, onClick }) => (
  <Button onClick={onClick}>
    <ButtonLiked liked={likedd} color="#C70039" />
    {likes} likes!
  </Button>
);
export default FavButtom;
