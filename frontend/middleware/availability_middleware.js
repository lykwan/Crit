import { AvailabilityConstants, AvailabilityActions }
  from '../actions/Availability_actions';
import { fetchAvailability,
         createAvailability,
         updateAvailability
       } from '../util/Availability_api_util';

const AvailabilityMiddleware = ({ dispatch }) => next => action => {
  const receiveAvailability = availability => {
    dispatch(AvailabilityActions.receiveAvailability(availability));
  };
  const errorCb = xhr => {
    dispatch(AvailabilityActions.receiveAvailabilityErrors(xhr.responseJSON));
  };

  switch(action.type) {
    case AvailabilityConstants.FETCH_AVAILABILITY:
      fetchAvailability(action.eventId, receiveAvailability, errorCb);
      return next(action);
    case AvailabilityConstants.CREATE_AVAILABILITY:
      createAvailability(action.eventId,
                      action.availability,
                      receiveAvailability,
                      errorCb);
      return next(action);
    case AvailabilityConstants.UPDATE_AVAILABILITY:
      updateAvailability(action.eventId,
                      action.availability,
                      receiveAvailability,
                      errorCb);
      return next(action);
    default:
      return next(action);
  }
};

export default AvailabilityMiddleware;
