export const AvailabilityConstants = {
  FETCH_AVAILABILITY: 'FETCH_AVAILABILITY',
  RECEIVE_AVAILABILITY: 'RECEIVE_AVAILABILITY',
  CREATE_AVAILABILITY: 'CREATE_AVAILABILITY',
  UPDATE_AVAILABILITY: 'UPDATE_AVAILABILITY',
  RECEIVE_AVAILABILITY_ERRORS: 'RECEIVE_AVAILABILITY_ERRORS'
};

const fetchAvailability = (eventId) => {
  return {
    type: AvailabilityConstants.FETCH_AVAILABILITY,
    eventId
  };
};

const receiveAvailability = (availability) => {
  return {
    type: AvailabilityConstants.RECEIVE_AVAILABILITY,
    availability
  };
};

const createAvailability = (eventId, availability) => {
  return {
    type: AvailabilityConstants.CREATE_AVAILABILITY,
    eventId,
    availability
  };
};

const updateAvailability = (eventId, availability) => {
  return {
    type: AvailabilityConstants.UPDATE_AVAILABILITY,
    eventId,
    availability
  };
};

const receiveAvailabilityErrors = (errors) => {
  return {
    type: AvailabilityConstants.RECEIVE_AVAILABILITY_ERRORS,
    errors
  };
};

export const AvailabilityActions = {
  fetchAvailability,
  receiveAvailability,
  createAvailability,
  updateAvailability,
  receiveAvailabilityErrors,
};
