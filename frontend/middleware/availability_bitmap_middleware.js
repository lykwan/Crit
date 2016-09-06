import { AvailabilityBitmapConstants, AvailabilityBitmapActions }
  from '../actions/condition_actions';
import { fetchAvailabilityBitmap,
         createAvailabilityBitmap,
         updateAvailabilityBitmap
       } from '../util/condition_api_util';

const AvailabilityBitmapMiddleware = ({ dispatch }) => next => action => {
  const receiveAvailabilityBitmap = condition => {
    dispatch(AvailabilityBitmapActions.receiveAvailabilityBitmap(condition));
  };
  const errorCb = xhr => {
    dispatch(AvailabilityBitmapActions.receiveAvailabilityBitmapErrors(xhr.responseJSON));
  };

  switch(action.type) {
    case AvailabilityBitmapConstants.FETCH_AVAILABILITY_BITMAP:
      fetchCondition(action.eventResponseId, receiveAvailabilityBitmap, errorCb);
      return next(action);
    case AvailabilityBitmapConstants.CREATE_AVAILABILITY_BITMAP:
      createCondition(action.eventResponseId,
                      action.condition,
                      receiveAvailabilityBitmap,
                      errorCb);
      return next(action);
    case AvailabilityBitmapConstants.UPDATE_AVAILABILITY_BITMAP:
      updateCondition(action.eventResponseId,
                      action.condition,
                      receiveAvailabilityBitmap,
                      errorCb);
      return next(action);
    default:
      return next(action);
  }
};

export default AvailabilityBitmapMiddleware;
