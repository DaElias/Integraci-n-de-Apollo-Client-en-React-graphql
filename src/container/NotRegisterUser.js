import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import { UserFrom } from "../components/UserFrom";
import { REGISTER } from "../hoc/MutationsGraphql";
import { login } from "../actions/types";

const NotRegisterUser = () => {
  const dispatch = useDispatch();
  // const loginAuth = useMutation();
  const [registerAuth, { error }] = useMutation(REGISTER);
  const [showLogInRegister, setShowLogInRegister] = useState(true);

  console.log(error);
  const onSubmitLogIn = (e, dataform) => {
    e.preventDefault();
    console.log("log in!!");
  };

  const onSubmitRegister = async (e, dataform) => {
    e.preventDefault();
    console.log("register!!");
    const { email, name = "", password } = dataform;
    //code here
    await registerAuth({
      variables: {
        input: { email, password },
      },
    })
      .then(() => {
        dispatch(login({ email, name, id: name }));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Fragment>
      {showLogInRegister ? (
        <UserFrom title="Log in" onSubmit={onSubmitLogIn} />
      ) : (
        <UserFrom title="Register" onSubmit={onSubmitRegister} register />
      )}
      <div style={{ textAlign: "center" }}>
        {showLogInRegister
          ? " Don't have an account? "
          : " I have an account? "}
        <b
          style={{ cursor: "pointer" }}
          onClick={() => setShowLogInRegister(!showLogInRegister)}
        >
          Sign up
        </b>
      </div>
    </Fragment>
  );
};

export default NotRegisterUser;
