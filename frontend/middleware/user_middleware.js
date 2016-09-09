import { UserConstants, UserActions } from '../actions/user_actions';
import { fetchUser, fetchUsers, updateUser } from '../util/user_api_util';

const UserMiddleware = ({ dispatch }) => next => action => {
  let success;
  const errorCb = xhr =>
    dispatch(UserActions.receiveUserErrors(xhr.responseJSON));
  switch(action.type) {
    case UserConstants.FETCH_USER:
      success = user => dispatch(UserActions.receiveUser(user));
      fetchUser(action.userId, success, errorCb);
      return next(action);
    case UserConstants.FETCH_USERS:
      success = users => dispatch(UserActions.receiveUsers(users));
      if (action.query) {
        fetchUsers(success, errorCb, action.query);
      } else {
        fetchUsers(success, errorCb);
      }
      return next(action);
    case UserConstants.UPDATE_USER:
      success = user => dispatch(UserActions.receiveUser(user));
      updateUser(action.userId, action.user, success, errorCb);
      return next(action);
    default:
      return next(action);
  }
};

export default UserMiddleware;
