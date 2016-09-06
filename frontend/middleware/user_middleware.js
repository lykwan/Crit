import { UserConstants, UserActions } from '../actions/user_actions';
import { fetchUser, fetchUsers } from '../util/user_api_util';

const UserMiddleware = ({ dispatch }) => next => action => {
  let success;
  switch(action.type) {
    case UserConstants.FETCH_USER:
      success = user => dispatch(UserActions.receiveUser(user));
      fetchUser(action.userId, success);
      return next(action);
    case UserConstants.FETCH_USERS:
      success = users => dispatch(UserActions.receiveUsers(users));
      fetchUsers(success);
      return next(action);
    default:
      return next(action);
  }
};

export default UserMiddleware;
