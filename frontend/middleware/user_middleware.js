import { UserConstants, UserActions } from '../actions/user_actions';
import { fetchUser } from '../util/user_api_util';

const UserMiddleware = ({ dispatch }) => next => action => {
  switch(action.type) {
    case UserConstants.FETCH_USER:
      const success = user => dispatch(UserActions.receiveUser(user));
      fetchUser(action.userId, success);
      return next(action);
    default:
      return next(action);
  }
};

export default UserMiddleware;
