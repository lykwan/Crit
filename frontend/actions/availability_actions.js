export const AvailabilityConstants = {
  FETCH_AVAILABILITIES: 'FETCH_AVAILABILITIES',
  RECEIVE_AVAILABILITIES: 'RECEIVE_AVAILABILITIES',
  CREATE_AVAILABILITIES: 'CREATE_AVAILABILITIES',
};

const fetchAvailabilities = (eventId) => {
  return {
    type: AvailabilityConstants.FETCH_AVAILABILITIES,
    eventId
  };
};

const receiveAvailabilities = (availabilities) => {
  return {
    type: AvailabilityConstants.RECEIVE_AVAILABILITIES,
    availabilities
  };
};

const createAvailabilities = (eventId, availabilities) => {
  return {
    type: AvailabilityConstants.CREATE_AVAILABILITIES,
    eventId,
    availabilities
  };
};

export const AvailabilityActions = {
  fetchAvailabilities,
  receiveAvailabilities,
  createAvailabilities
};
