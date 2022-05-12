import { LOGIN_TYPE, LOGOUT_TYPE } from "../actions/types";

const initialState = {
  user: {
    login: false,
    name: "",
    email: "",
  },
  datos: {},
};

export const datoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_TYPE:
      const { name, email } = payload;
      return {
        ...state,
        user: {
          login: true,
          name,
          email,
        },
      };
    case LOGOUT_TYPE:
      return {
        ...state,
        user: { login: false, name: "", email: "" },
        datos: {},
      };
    default:
      return { ...state };
  }
};
