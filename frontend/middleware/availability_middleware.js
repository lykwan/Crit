import { AvailabilityConstants, AvailabilityActions }
  from '../actions/availability_actions';
import { fetchAvailabilities,
         createAvailabilities,
         updateAvailabilities
       } from '../util/availability_api_util';

const AvailabilityMiddleware = ({ dispatch }) => next => action => {
  const receiveAvailabilities = availabilities => {
    dispatch(AvailabilityActions.receiveAvailabilities(availabilities));
  };

  switch(action.type) {
    case AvailabilityConstants.FETCH_AVAILABILITIES:
      fetchAvailabilities(action.eventId, receiveAvailabilities);
      return next(action);
    case AvailabilityConstants.CREATE_AVAILABILITIES:
      createAvailabilities(action.eventId,
                      action.availabilities,
                      receiveAvailabilities);
      return next(action);
    default:
      return next(action);
  }
};

export default AvailabilityMiddleware;
