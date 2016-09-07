export const fetchAvailabilities = (eventId, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/events/${ eventId }/availabilities`,
    success,
    error
  });
};

export const createAvailabilities =
  (eventId, availabilities, success, error) => {
    $.ajax({
      method: 'POST',
      url: `/api/events/${ eventId }/availabilities`,
      data: { availabilities },
      success,
      error
    });
};
