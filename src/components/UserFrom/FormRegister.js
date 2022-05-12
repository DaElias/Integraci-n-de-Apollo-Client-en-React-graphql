import React, { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../../hoc/MutationsGraphql";
import { handleLogin } from "../../actions/actions";
import { RegisterSvg } from "../Logo/index";
import { Container, Form, Input, Button } from "./styles";
import { Loader as Spinner } from "../Styles/Animation";
import Information from "../Information/index";
import { TOKEN_NAME } from "../../actions/types";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
  name: "",
};

const FormRegister = () => {
  const [registerAuth, { loading }] = useMutation(REGISTER);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dataform, setDataForm] = useState(initialState);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showInformation, setShowInformation] = useState(false);

  const validate = useMemo(
    () => validatePassword(dataform.password, confirmPassword),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [confirmPassword, dataform.password]
  );

  const handleInput = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setDataForm({ ...dataform, email: value });
        break;
      case "password":
        setDataForm({ ...dataform, password: value });
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      case "name":
        setDataForm({ ...dataform, name: value });
        break;
      default:
        break;
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    // console.log("Register");
    const { email, password } = dataform;
    //* code here

    await registerAuth({
      variables: {
        input: { email, password },
      },
    })
      .then((res) => {
        const { signup } = res.data;
        window.sessionStorage.setItem(TOKEN_NAME, signup);
        dispatch(handleLogin({ email, name: "", token: signup }));
        navigate("/");
      })
      .catch((e) => {
        // console.log(e);
        setShowInformation(true);
        setTimeout(() => setShowInformation(false), 4000);
      });
  };
  return (
    <Container>
      <RegisterSvg />
      <h2>Register</h2>
      <Form onSubmit={handleRegister}>
        <Input
          placeholder="name"
          type="tex"
          name="name"
          value={dataform.name}
          onChange={handleInput}
        />
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
        <Input
          placeholder="confirm password"
          value={confirmPassword}
          type="password"
          name="confirmPassword"
          onChange={handleInput}
          validate={!validate}
          required
        />

        {!validate && (
          <Information
            alert={true}
            msg="La contraseña no coincide"
            showInformation={true}
          />
        )}
        <Button disabled={loading || !validate} type="submit">
          {loading ? <Spinner /> : "Registrarse"}
        </Button>
        <Information showInformation={showInformation} alert />
      </Form>
    </Container>
  );
};

const validatePassword = (password1 = "", password2 = "") => {
  if (password1 === password2) return true;
  return false;
};

export default FormRegister;
