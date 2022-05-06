import { LOGIN_TYPE, LOGOUT_TYPE } from "../actions/types";

const initialState = {
  user: {
    login: false,
    name: "",
    email: "",
    id: "",
  },
  datos: {},
};

export const datoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_TYPE:
      const { name, email, id } = payload;
      return {
        ...state,
        user: {
          login: true,
          name,
          email,
          id,
        },
      };
    case LOGOUT_TYPE:
      return {
        ...state,
        user: { login: false, name: "", email: "" },
        datos: {},
      };
    //   return { ...state, user: initialState.user, datos: initialState.datos };
    default:
      return { ...state };
  }
};
