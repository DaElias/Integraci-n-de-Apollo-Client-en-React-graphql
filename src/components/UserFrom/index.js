import React, { useMemo, useState } from "react";
import { Button, Form, Input, Container } from "./styles";
import { RegisterSvg } from "../Logo/index";

const initialState = {
  email: "",
  password: "",
  name: "",
};

export const UserFrom = ({ onSubmit, title = "", register = false }) => {
  const [dataform, setDataForm] = useState(initialState);
  const [confirmPassword, setConfirmPassword] = useState("");
  const validate = useMemo(
    () => validatePassword(dataform.password, confirmPassword, register),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [confirmPassword]
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
  return (
    <Container>
      <RegisterSvg />
      <h2>{title.toUpperCase()}</h2>
      <Form onSubmit={(e) => onSubmit(e,dataform)}>
        {register && (
          <Input
            placeholder="name"
            type="tex"
            name="name"
            value={dataform.name}
            onChange={handleInput}
          />
        )}
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
        {register && (
          <Input
            placeholder="confirm password"
            value={confirmPassword}
            type="password"
            name="confirmPassword"
            onChange={handleInput}
            validate={!validate}
              required
          />
        )}
        {!validate ? (
          <Button disabled>{title}</Button>
        ) : (
          <Button type="submit">{title}</Button>
        )}
      </Form>
    </Container>
  );
};
const validatePassword = (password1 = "", password2 = "", register = false) => {
  if (!register) return true;
  if (password1 === password2) return true;
  return false;
};
