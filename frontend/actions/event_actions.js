export const EventConstants = {
  FETCH_EVENTS: 'FETCH_EVENTS',
  FETCH_SINGLE_EVENT: 'FETCH_SINGLE_EVENT',
  RECEIVE_EVENTS: 'RECEIVE_EVENTS',
  RECEIVE_SINGLE_EVENT: 'RECEIVE_SINGLE_EVENT',
  CREATE_EVENT: 'CREATE_EVENT',
  EDIT_EVENT: 'EDIT_EVENT',
  DELETE_EVENT: 'DELETE_EVENT',
  REMOVE_EVENT: 'REMOVE_EVENT',
  RECEIVE_EVENT_ERRORS: 'RECEIVE_EVENT_ERRORS',
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

const createEvent = (groupId, eventData) => {
  return {
    type: EventConstants.CREATE_EVENT,
    groupId,
    eventData
  };
};

const updateEvent = (eventId, eventData) => {
  return {
    type: EventConstants.EDIT_EVENT,
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

const destroyEvent = (eventId) => {
  return {
    type: EventConstants.DESTROY_EVENT,
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

export const EventActions = {
  fetchEvents,
  fetchSingleEvent,
  createEvent,
  updateEvent,
  receiveSingleEvent,
  receiveEvents,
  destroyEvent,
  removeEvent,
  receiveEventErrors
};
