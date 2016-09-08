export const GroupConstants = {
  FETCH_GROUPS: 'FETCH_GROUPS',
  FETCH_SINGLE_GROUP: 'FETCH_SINGLE_GROUP',
  CREATE_GROUP: 'CREATE_GROUP',
  UPDATE_GROUP: 'UPDATE_GROUP',
  RECEIVE_SINGLE_GROUP: 'RECEIVE_SINGLE_GROUP',
  RECEIVE_GROUPS: 'RECEIVE_GROUPS',
  DELETE_GROUP: 'DELETE_GROUP',
  REMOVE_GROUP: 'REMOVE_GROUP',
  RECEIVE_GROUP_ERRORS: 'RECEIVE_GROUP_ERRORS',
  CREATE_GROUP_MEMBERSHIP: 'CREATE_GROUP_MEMBERSHIP',
  DELETE_GROUP_MEMBERSHIP: 'DELETE_GROUP_MEMBERSHIP'
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

const updateGroup = (groupId, group) => {
  return {
    type: GroupConstants.UPDATE_GROUP,
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

const deleteGroup = (groupId) => {
  return {
    type: GroupConstants.DELETE_GROUP,
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

const createGroupMembership = (groupId, groupMembership) => {
  return {
    type: GroupConstants.CREATE_GROUP_MEMBERSHIP,
    groupId,
    groupMembership
  };
};

const deleteGroupMembership = (groupId, groupMembership) => {
  return {
    type: GroupConstants.DELETE_GROUP_MEMBERSHIP,
    groupId,
    groupMembership
  };
};


// const removeGroupMembership = () => {
//   return {
//     type: GroupConstants.REMOVE_GROUP_MEMBERSHIP,
//     groupId,
//     groupMembership
//   };
// };

export const GroupActions = {
  fetchGroups,
  fetchSingleGroup,
  createGroup,
  updateGroup,
  receiveSingleGroup,
  receiveGroups,
  deleteGroup,
  removeGroup,
  receiveGroupErrors,
  createGroupMembership,
  deleteGroupMembership
};
