import { merge } from 'lodash';
import { SessionConstants } from '../actions/session_actions';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultState, action) => {
  const newState = merge({}, defaultState);
  switch(action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      newState.currentUser = action.user;
      return newState;
    case SessionConstants.RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    case SessionConstants.LOGOUT:
      return defaultState;
    default:
      return state;
  }
};

export default SessionReducer;
