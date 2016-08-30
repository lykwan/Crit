export const SessionConstants = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  SIGNUP: 'SIGNUP',
  RECEIVE_CURRENT_USER: 'RECEIVE_CURRENT_USER',
  RECEIVE_ERRORS: 'RECEIVE_ERRORS'
};

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
const receiveErrors = (errors) => ({
  type: SessionConstants.RECEIVE_ERRORS,
  errors
});

export const SessionActions = {
  login: login,
  logout: logout,
  signup: signup,
  receiveCurrentUser: receiveCurrentUser,
  receiveErrors: receiveErrors,
};
