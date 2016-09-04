export const fetchEvents = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/events',
    success,
    error
  });
};

export const fetchSingleEvent = (eventId, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/events/${eventId}`,
    success,
    error
  });
};

export const createEvent = (eventData, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/events`,
    data: { event: eventData },
    success,
    error
  });
};

export const updateEvent = (eventId, eventData, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/events/${eventId}`,
    data: { event: eventData },
    success,
    error
  });
};

export const deleteEvent = (eventId, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/events/${eventId}`,
    success,
    error
  });
};
