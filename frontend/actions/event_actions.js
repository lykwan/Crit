export const EventConstants = {
  FETCH_EVENTS: 'FETCH_EVENTS',
  FETCH_SINGLE_EVENT: 'FETCH_SINGLE_EVENT',
  RECEIVE_EVENTS: 'RECEIVE_EVENTS',
  RECEIVE_SINGLE_EVENT: 'RECEIVE_SINGLE_EVENT',
  CREATE_EVENT: 'CREATE_EVENT',
  UPDATE_EVENT: 'UPDATE_EVENT',
  DELETE_EVENT: 'DELETE_EVENT',
  REMOVE_EVENT: 'REMOVE_EVENT',
  CLOSE_POLL: 'CLOSE_POLL',
  RECEIVE_EVENT_ERRORS: 'RECEIVE_EVENT_ERRORS'
};


const fetchEvents = () => {
  return {
    type: EventConstants.FETCH_EVENTS
  };
};

const fetchSingleEvent = (eventId) => {
  return {
    type: EventConstants.FETCH_SINGLE_EVENT,
    eventId
  };
};

const createEvent = (eventData) => {
  return {
    type: EventConstants.CREATE_EVENT,
    eventData
  };
};

const updateEvent = (eventId, eventData) => {
  return {
    type: EventConstants.UPDATE_EVENT,
    eventId,
    eventData
  };
};

const receiveEvents = (events) => {
  return {
    type: EventConstants.RECEIVE_EVENTS,
    events
  };
};

const receiveSingleEvent = (eventData) => {
  return {
    type: EventConstants.RECEIVE_SINGLE_EVENT,
    eventData
  };
};

const deleteEvent = (eventId) => {
  return {
    type: EventConstants.DELETE_EVENT,
    eventId
  };
};

const removeEvent = (eventData) => {
  return {
    type: EventConstants.REMOVE_EVENT,
    eventData
  };
};

const receiveEventErrors = (errors) => {
  return {
    type: EventConstants.RECEIVE_EVENT_ERRORS,
    errors
  };
};

const closePoll = (eventId) => {
  return {
    type: EventConstants.CLOSE_POLL,
    eventId
  };
};

export const EventActions = {
  fetchEvents,
  fetchSingleEvent,
  createEvent,
  updateEvent,
  receiveSingleEvent,
  receiveEvents,
  deleteEvent,
  removeEvent,
  receiveEventErrors,
  closePoll
};
