import { SessionActions, SessionConstants } from '../actions/session_actions';
import { login, signup, logout } from '../util/session_api_util';

const SessionMiddleware = ({ dispatch }) => next => action => {
  const successCb = user => dispatch(SessionActions.receiveCurrentUser(user));
  const errorCb = xhr => {
    const errors = xhr.responseJSON;
    dispatch(SessionActions.receiveErrors(errors));
  };

  switch(action.type) {
    case SessionConstants.LOGIN:
      login(action.user, successCb, errorCb);
      return next(action);
    case SessionConstants.LOGOUT:
      logout(() => next(action));
      break;
    case SessionConstants.SIGNUP:
      signup(action.user, successCb, errorCb);
      return next(action);
    default:
      return next(action);
  }
};

export default SessionMiddleware;
