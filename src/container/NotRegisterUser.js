import React, { Fragment, useState } from "react";
import FormLogin from "../components/UserFrom/FormLogin";
import FormRegister from "../components/UserFrom/FormRegister";
import styled from "styled-components";
const NotRegisterUser = () => {
  // const loginAuth = useMutation();
  const [showLogInRegister, setShowLogInRegister] = useState(true);

  return (
    <Fragment>
      {showLogInRegister ? <FormLogin /> : <FormRegister />}
      <Container style={{ textAlign: "center" }}>
        {showLogInRegister ? (
          <>
            Don't have an account?
            <B onClick={() => setShowLogInRegister(!showLogInRegister)}>
              Sign up
            </B>
          </>
        ) : (
          <>
            I have an account?
            <B onClick={() => setShowLogInRegister(!showLogInRegister)}>
              Log In
            </B>
          </>
        )}
      </Container>
    </Fragment>
  );
};


//* Styles 
const B = styled.b`
  cursor: pointer;
  margin-left: 12px;
`;
const Container = styled.div`
  text-align: center;
`;

export default NotRegisterUser;
