export const fetchCondition = (eventResponseId, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/event_responses/${ eventResponseId }/condition`,
    success,
    error
  });
};

export const updateCondition =
  (eventResponseId, condition, success, error) => {
    $.ajax({
      method: 'PATCH',
      url: `/api/event_responses/${ eventResponseId }/condition`,
      data: { condition },
      success,
      error
  });
};

export const createCondition = (eventResponseId, condition, success, error) => {
  $.ajax({
    method: 'POST',
    url: `/api/event_responses/${ eventResponseId }/condition`,
    data: { condition },
    success,
    error
  });
};
