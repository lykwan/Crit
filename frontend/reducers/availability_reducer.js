import { AvailabilityConstants } from '../actions/availability_actions';
import { merge } from 'lodash';

const AvailabilityReducer = (state = {}, action) => {
  switch(action.type) {
    case AvailabilityConstants.RECEIVE_AVAILABILITY:
      return merge({}, { availability: action.availability });
    case AvailabilityConstants.REMOVE_AVAILABILITY:
      return {};
    case AvailabilityConstants.RECEIVE_AVAILABILITY_ERRORS:
      return merge({}, { errors: action.errors });
    default:
      return state;
  }
};

export default AvailabilityReducer;
