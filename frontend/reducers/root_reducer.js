import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import GroupReducer from './group_reducer';
import EventReducer from './event_reducer';
import EventResponseReducer from './event_response_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  users: UserReducer,
  groups: GroupReducer,
  events: EventReducer,
  eventResponse: EventResponseReducer
});

export default RootReducer;
