import { merge } from 'lodash';
import { UserConstants } from '../actions/user_actions';

const UserReducer = (state = {}, action) => {
  switch(action.type) {
    case UserConstants.RECEIVE_USER:
      return merge({}, state, { userDetail: action.user });
    default:
      return state;
  }
};

export default UserReducer;
