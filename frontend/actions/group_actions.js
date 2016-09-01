export const GroupConstants = {
  FETCH_GROUPS: 'FETCH_GROUPS',
  FETCH_SINGLE_GROUP: 'FETCH_SINGLE_GROUP',
  CREATE_GROUP: 'CREATE_GROUP',
  EDIT_GROUP: 'EDIT_GROUP',
  RECEIVE_SINGLE_GROUP: 'RECEIVE_SINGLE_GROUP',
  RECEIVE_GROUPS: 'RECEIVE_GROUPS',
  DESTROY_GROUP: 'DESTROY_GROUP',
  REMOVE_GROUP: 'REMOVE_GROUP',
  RECEIVE_GROUP_ERRORS: 'RECEIVE_GROUP_ERRORS'
};

const fetchGroups = () => {
  return {
    type: GroupConstants.FETCH_GROUPS
  };
};

const fetchSingleGroup = (groupId) => {
  return {
    type: GroupConstants.FETCH_SINGLE_GROUP,
    groupId
  };
};

const createGroup = (group) => {
  return {
    type: GroupConstants.CREATE_GROUP,
    group
  };
};

const editGroup = (groupId, group) => {
  return {
    type: GroupConstants.EDIT_GROUP,
    groupId,
    group
  };
};

const receiveGroups = (groups) => {
  return {
    type: GroupConstants.RECEIVE_GROUPS,
    groups
  };
};

const receiveSingleGroup = (group) => {
  return {
    type: GroupConstants.RECEIVE_SINGLE_GROUP,
    group
  };
};

const destroyGroup = (groupId) => {
  return {
    type: GroupConstants.DESTROY_GROUP,
    groupId
  };
};

const removeGroup = (group) => {
  return {
    type: GroupConstants.REMOVE_GROUP,
    group
  };
};

const receiveGroupErrors = (errors) => {
  return {
    type: GroupConstants.RECEIVE_GROUP_ERRORS,
    errors
  };
};

export const GroupActions = {
  fetchGroups,
  fetchSingleGroup,
  createGroup,
  editGroup,
  receiveSingleGroup,
  receiveGroups,
  destroyGroup,
  removeGroup,
  receiveGroupErrors
};
