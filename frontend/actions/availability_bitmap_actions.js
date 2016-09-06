export const AvailabilityBitmapConstants = {
  FETCH_AVAILABILITY_BITMAP: 'FETCH_AVAILABILITY_BITMAP',
  RECEIVE_AVAILABILITY_BITMAP: 'RECEIVE_AVAILABILITY_BITMAP',
  CREATE_AVAILABILITY_BITMAP: 'CREATE_AVAILABILITY_BITMAP',
  UPDATE_AVAILABILITY_BITMAP: 'UPDATE_AVAILABILITY_BITMAP',
  RECEIVE_AVAILABILITY_BITMAP_ERRORS: 'RECEIVE_AVAILABILITY_BITMAP_ERRORS'
};

const fetchAvailabilityBitmap = (eventResponseId) => {
  return {
    type: AvailabilityBitmapConstants.FETCH_AVAILABILITY_BITMAP,
    eventResponseId
  };
};

const receiveAvailabilityBitmap = (availabilityBitmap) => {
  return {
    type: AvailabilityBitmapConstants.RECEIVE_AVAILABILITY_BITMAP,
    availabilityBitmap
  };
};

const createAvailabilityBitmap = (eventResponseId, availabilityBitmap) => {
  return {
    type: AvailabilityBitmapConstants.CREATE_AVAILABILITY_BITMAP,
    eventResponseId,
    availabilityBitmap
  };
};

const updateAvailabilityBitmap = (eventResponseId, availabilityBitmap) => {
  return {
    type: AvailabilityBitmapConstants.UPDATE_AVAILABILITY_BITMAP,
    eventResponseId,
    availabilityBitmap
  };
};

const receiveAvailabilityBitmapErrors = (errors) => {
  return {
    type: AvailabilityBitmapConstants.RECEIVE_AVAILABILITY_BITMAP_ERRORS,
    errors
  };
};

export const ConditionActions = {
  fetchAvailabilityBitmap,
  receiveAvailabilityBitmap,
  createAvailabilityBitmap,
  updateAvailabilityBitmap,
  receiveAvailabilityBitmapErrors,
};
