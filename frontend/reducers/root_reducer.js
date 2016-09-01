import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import GroupReducer from './group_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  users: UserReducer,
  groups: GroupReducer
});

export default RootReducer;
