export const fetchEventResponse = (eventId, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/events/${ eventId }/event_response`,
    success,
    error
  });
};

export const updateEventResponse =
  (eventId, eventResponse, success, error) => {
    $.ajax({
      method: 'PATCH',
      url: `/api/events/${ eventId }/event_response`,
      data: { event_response: eventResponse },
      success,
      error
  });
};

export const deleteEventResponse = (eventId, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/events/${ eventId }/event_response`,
    success,
    error
  });
};

export const createEventResponse = (eventId, eventResponse, success, error) => {
  $.ajax({
    method: 'POST',
    url: `/api/events/${ eventId }/event_response`,
    data: { event_response: eventResponse },
    success,
    error
  });
};
