import { EventConstants } from '../actions/event_actions';
import { merge } from 'lodash';

const EventReducer = (state = {}, action) => {
  switch(action.type) {
    case EventConstants.RECEIVE_EVENTS:
      return merge({}, { events: action.events });
    case EventConstants.RECEIVE_SINGLE_EVENT:
      return merge({}, { eventDetail: action.eventData });
    case EventConstants.RECEIVE_EVENT_ERRORS:
      return merge({}, { errors: action.errors });
    default:
      return state;
  }
};

export default EventReducer;
