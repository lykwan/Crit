export const fetchGroups = (success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/groups',
    success,
    error
  });
};

export const fetchSingleGroup = (groupId, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/groups/${ groupId }`,
    success,
    error
  });
};

export const createGroup = (group, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/groups',
    data: { group: group },
    success,
    error
  });
};

export const updateGroup = (groupId, group, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/groups/${ groupId }`,
    data: { group: group },
    success,
    error
  });
};

export const deleteGroup = (groupId, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/groups/${ groupId }`,
    success,
    error
  });
};
