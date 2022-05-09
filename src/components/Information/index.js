import React from "react";
import { Info } from "./styles";
const Information = ({
  showInformation = false,
  msg = "El usuario ya existe o hay algún problema!!",
  alert,
}) => {
  return showInformation && <Info alert={alert}>{msg}</Info>;
};

export default Information;
