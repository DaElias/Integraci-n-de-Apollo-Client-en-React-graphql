export const LOGIN_TYPE = "@LOGIN_TYPE/APP";
export const LOGOUT_TYPE = "@LOGOUT_TYPE/APP";

export const login = (payload) => ({ type: LOGIN_TYPE, payload });

export const logOut = () => ({ type: LOGOUT_TYPE });
