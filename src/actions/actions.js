import { TOKEN_NAME, LOGIN_TYPE, LOGOUT_TYPE } from "./types";

export const handleLogin = (payload) => async (dispatch) => {
  window.sessionStorage.setItem(TOKEN_NAME, payload.token);
  dispatch({ type: LOGIN_TYPE, payload });
};

export const sesionOut = () => async (dispatch) => {
  window.sessionStorage.removeItem(TOKEN_NAME);
  dispatch({ type: LOGOUT_TYPE });
};
