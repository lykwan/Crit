import { EventResponseConstants, EventResponseActions }
  from '../actions/event_response_actions';
import { fetchEventResponse,
         createEventResponse,
         updateEventResponse,
         deleteEventResponse
       } from '../util/event_response_api_util';

const EventResponseMiddleware = ({ dispatch }) => next => action => {
  const receiveEventResponse = eventResponse => {
    dispatch(EventResponseActions.receiveEventResponse(eventResponse));
  };
  const removeEventResponse = () =>
    dispatch(EventResponseActions.removeEventResponse());
  const errorCb = xhr => {
    dispatch(EventResponseActions.receiveEventResponseErrors(xhr.responseJSON));
  };


  switch(action.type) {
    case EventResponseConstants.FETCH_EVENT_RESPONSE:
      fetchEventResponse(action.eventId, receiveEventResponse, errorCb);
      return next(action);
    case EventResponseConstants.CREATE_EVENT_RESPONSE:
      createEventResponse(action.eventId,
                          action.eventResponse,
                          receiveEventResponse,
                          errorCb);
      return next(action);
    case EventResponseConstants.UPDATE_EVENT_RESPONSE:
      updateEventResponse(action.eventId,
                          action.eventResponse,
                          receiveEventResponse,
                          errorCb);
      return next(action);
    case EventResponseConstants.DELETE_EVENT_RESPONSE:
      deleteEventResponse(action.eventId,
                          removeEventResponse,
                          errorCb);
      return next(action);
    default:
      return next(action);
  }
};

export default EventResponseMiddleware;
