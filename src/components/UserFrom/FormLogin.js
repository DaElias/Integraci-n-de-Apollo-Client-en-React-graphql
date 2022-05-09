import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../hoc/MutationsGraphql";
import { login as loginLocal } from "../../actions/types";
import { Button, Form, Input, Container } from "./styles";
import { RegisterSvg } from "../Logo/index";
import { Loader as Spinner } from "../Styles/Animation";
import Information from "../Information";
import { TOKEN_NAME } from "../../actions/types";

const initialState = {
  email: "",
  password: "",
};

const FormLogin = () => {
  const dispatch = useDispatch();
  const [loginAuth, { loading }] = useMutation(LOGIN);
  const [dataform, setDataForm] = useState(initialState);
  const [showInformation, setShowInformation] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setDataForm({ ...dataform, email: value });
        break;
      case "password":
        setDataForm({ ...dataform, password: value });
        break;
      default:
        break;
    }
  };
  const handleLogIn = async (e) => {
    e.preventDefault();
    const { email, password } = dataform;

    await loginAuth({
      variables: {
        input: {
          email,
          password,
        },
      },
    })
      .then((res) => {
        const { login } = res.data;
        localStorage.setItem(TOKEN_NAME, login);
        dispatch(loginLocal({ email, name: email, id: login }));
      })
      .catch((e) => {
        console.log(e);
        setShowInformation(true);
        setTimeout(() => setShowInformation(false), 4000);
      });
  };
  return (
    <Container>
      <RegisterSvg />
      <h2>Inicio de sesión</h2>
      <Form onSubmit={handleLogIn}>
        <Input
          placeholder="email"
          value={dataform.email}
          type="email"
          name="email"
          onChange={handleInput}
          required
        />
        <Input
          placeholder="password"
          value={dataform.password}
          type="password"
          name="password"
          onChange={handleInput}
          required
        />
        <Button disabled={loading}> {loading ? <Spinner /> : "Submit"} </Button>
        <Information
          alert
          msg="El usuario o contraseña no coinciden"
          showInformation={showInformation}
        />
      </Form>
    </Container>
  );
};

export default FormLogin;
