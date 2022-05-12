import React from "react";
import { useApolloClient } from "@apollo/client";
import { useDispatch } from "react-redux";
import { sesionOut } from "../actions/actions";
import { Button } from "../components/UserFrom/styles";
import HelmetLayaout from "../components/Layaout/HelmetLayaout";

const User = () => {
  const apolloClient = useApolloClient();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(sesionOut());
    apolloClient.resetStore();
    window.location.replace("/");
  };

  return (
    <HelmetLayaout title="User" content="Informacion de usuario." emoji="👤">
      <Button onClick={handleLogOut}>Cerrar Sesion</Button>
    </HelmetLayaout>
  );
};

export default User;
