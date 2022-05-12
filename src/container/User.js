import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sesionOut } from "../actions/actions";
import { Button } from "../components/UserFrom/styles";
const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(sesionOut());
    navigate("/favs");
  };

  return (
    <div>
      User
      <Button onClick={handleLogOut}>Cerrar Sesion</Button>
    </div>
  );
};

export default User;
