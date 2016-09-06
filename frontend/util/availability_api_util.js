export const fetchAvailability= (eventId, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/events/${ eventId }/availability`,
    success,
    error
  });
};

export const updateAvailability=
  (eventId, availability, success, error) => {
    $.ajax({
      method: 'PATCH',
      url: `/api/events/${ eventId }/availability`,
      data: { availability },
      success,
      error
  });
};

export const createAvailability=
  (eventId, availability, success, error) => {
    $.ajax({
      method: 'POST',
      url: `/api/events/${ eventId }/availability`,
      data: { availability },
      success,
      error
    });
};
