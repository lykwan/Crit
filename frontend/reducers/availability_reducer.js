import { AvailabilityConstants } from '../actions/availability_actions';
import { merge } from 'lodash';

const AvailabilityReducer = (state = [], action) => {
  switch(action.type) {
    case AvailabilityConstants.RECEIVE_AVAILABILITIES:
      return action.availabilities;
    default:
      return state;
  }
};

export default AvailabilityReducer;
