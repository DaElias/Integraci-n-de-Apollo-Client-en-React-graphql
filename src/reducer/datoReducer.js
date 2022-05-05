import { LOGIN_TYPE, LOGOUT_TYPE } from "../actions/types";

const initialState = {
  user: {
    login: false,
    name: "",
    mail: "",
    id: "",
  },
  datos: {},
};

export const datoReducer = (state = initialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case LOGIN_TYPE:
      const { name, mail, id } = payload;
      return {
        ...state,
        user: {
          login: true,
          name,
          mail,
          id,
        },
      };
    case LOGOUT_TYPE:
      return { ...state, user: {}, datos: {} };
    //   return { ...state, user: initialState.user, datos: initialState.datos };
    default:
      return { ...state };
  }
};
