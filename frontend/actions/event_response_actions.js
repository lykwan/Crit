export const EventResponseConstants = {
  FETCH_EVENT_RESPONSE: 'FETCH_EVENT_RESPONSE',
  RECEIVE_EVENT_RESPONSE: 'RECEIVE_EVENT_RESPONSE',
  CREATE_EVENT_RESPONSE: 'CREATE_EVENT_RESPONSE',
  UPDATE_EVENT_RESPONSE: 'UPDATE_EVENT_RESPONSE',
  DELETE_EVENT_RESPONSE: 'DELETE_EVENT_RESPONSE',
  REMOVE_EVENT_RESPONSE: 'REMOVE_EVENT_RESPONSE',
  RECEIVE_EVENT_RESPONSE_ERRORS: 'RECEIVE_EVENT_RESPONSE_ERRORS'
};

const fetchEventResponse = (eventId) => {
  return {
    type: EventResponseConstants.FETCH_EVENT_RESPONSE,
    eventId
  };
};

const receiveEventResponse = (eventResponse) => {
  return {
    type: EventResponseConstants.RECEIVE_EVENT_RESPONSE,
    eventResponse
  };
};

const createEventResponse = (eventId, eventResponse) => {
  return {
    type: EventResponseConstants.CREATE_EVENT_RESPONSE,
    eventId,
    eventResponse
  };
};

const updateEventResponse = (eventResponseId, eventResponse) => {
  return {
    type: EventResponseConstants.UPDATE_EVENT_RESPONSE,
    eventResponseId,
    eventResponse
  };
};

const deleteEventResponse = (eventResponseId, eventResponse) => {
  return {
    type: EventResponseConstants.DELETE_EVENT_RESPONSE,
    eventResponseId,
    eventResponse
  };
};

const removeEventResponse = () => {
  return {
    type: EventResponseConstants.REMOVE_EVENT_RESPONSE
  };
};

const receiveEventResponseErrors = (errors) => {
  return {
    type: EventResponseConstants.RECEIVE_EVENT_RESPONSE_ERRORS,
    errors
  };
};

export const EventResponseActions = {
  fetchEventResponse,
  receiveEventResponse,
  createEventResponse,
  updateEventResponse,
  deleteEventResponse,
  removeEventResponse,
  receiveEventResponseErrors,
};
