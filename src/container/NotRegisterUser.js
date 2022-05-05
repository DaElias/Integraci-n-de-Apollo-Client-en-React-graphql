import React from "react";
import { login } from "../actions/types";
import { useDispatch } from "react-redux";

const NotRegisterUser = () => {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(login({ name: "Test 1", mail: "test1@test.com", id: "1" }));
  };

  return (
    <div>
      <button onClick={handleLogin}>
        <h1>Login</h1>
      </button>
    </div>
  );
};

export default NotRegisterUser;
