export const fetchAvailabilityBitmap = (eventResponseId, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/event_responses/${ eventResponseId }/availabilityBitmap`,
    success,
    error
  });
};

export const updateAvailabilityBitmap =
  (eventResponseId, availabilityBitmap, success, error) => {
    $.ajax({
      method: 'PATCH',
      url: `/api/event_responses/${ eventResponseId }/availabilityBitmap`,
      data: { availabilityBitmap },
      success,
      error
  });
};

export const createAvailabilityBitmap =
  (eventResponseId, availabilityBitmap, success, error) => {
    $.ajax({
      method: 'POST',
      url: `/api/event_responses/${ eventResponseId }/availabilityBitmap`,
      data: { availabilityBitmap },
      success,
      error
    });
};
