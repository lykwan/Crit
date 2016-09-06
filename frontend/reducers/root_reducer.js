import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import GroupReducer from './group_reducer';
import EventReducer from './event_reducer';
import EventResponseReducer from './event_response_reducer';
import ConditionReducer from './condition_reducer';
import AvailabilityBitmapReducer from './availability_bitmap_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  users: UserReducer,
  groups: GroupReducer,
  events: EventReducer,
  eventResponse: EventResponseReducer,
  condition: ConditionReducer,
  availability_bitmap: AvailabilityBitmapReducer
});

export default RootReducer;
