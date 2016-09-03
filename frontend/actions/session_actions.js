export const SessionConstants = Object.freeze({
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  SIGNUP: 'SIGNUP',
  RECEIVE_CURRENT_USER: 'RECEIVE_CURRENT_USER',
  RECEIVE_SESSION_ERRORS: 'RECEIVE_SESSION_ERRORS'
});

const login = (user) => ({
  type: SessionConstants.LOGIN,
  user
});

const logout = () => ({
  type: SessionConstants.LOGOUT,
});

const signup = (user) => ({
  type: SessionConstants.SIGNUP,
  user
});

const receiveCurrentUser = (user) => ({
  type: SessionConstants.RECEIVE_CURRENT_USER,
  user
});
const receiveSessionErrors = (errors) => ({
  type: SessionConstants.RECEIVE_SESSION_ERRORS,
  errors
});

export const SessionActions = Object.freeze({
  login: login,
  logout: logout,
  signup: signup,
  receiveCurrentUser: receiveCurrentUser,
  receiveSessionErrors: receiveSessionErrors
});
