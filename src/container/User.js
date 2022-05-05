import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../actions/types";
const User = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div>
      User
      <button onClick={handleLogOut}>Log Out</button>
    </div>
  );
};

export default User;
