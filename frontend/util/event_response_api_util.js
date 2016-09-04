export const fetchEventResponse = (eventId, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/events/${ eventId }/event_response`,
    success,
    error
  });
};

export const updateEventResponse =
  (eventResponseId, eventResponse, success, error) => {
    $.ajax({
      method: 'PATCH',
      url: `/api/event_responses/${ eventResponseId }`,
      data: { eventResponse },
      success,
      error
  });
};

export const deleteEventResponse = (eventResponseId, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/event_responses/${ eventResponseId }`,
    success,
    error
  });
};

export const createEventResponse = (eventId, eventResponse, success, error) => {
  $.ajax({
    method: 'POST',
    url: `/api/events/${ eventId }/event_response`,
    data: { eventResponse },
    success,
    error
  });
};
