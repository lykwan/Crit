import { EventResponseConstants } from '../actions/event_response_actions';
import { merge } from 'lodash';

const EventResponseReducer = (state = {}, action) => {
  switch(action.type) {
    case EventResponseConstants.RECEIVE_EVENT_RESPONSE:
      return merge({}, { eventResponse: action.eventResponse });
    case EventResponseConstants.REMOVE_EVENT_RESPONSE:
      return {};
    case EventResponseConstants.RECEIVE_EVENT_RESPONSE_ERRORS:
      return merge({}, { errors: action.errors });
    default:
      return state;
  }
};

export default EventResponseReducer;
