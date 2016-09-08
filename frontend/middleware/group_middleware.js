import { hashHistory } from 'react-router';
import { GroupConstants, GroupActions } from '../actions/group_actions';
import { fetchGroups, fetchSingleGroup, createGroup, updateGroup, deleteGroup,
  createGroupMembership, deleteGroupMembership } from '../util/group_api_util';

const GroupMiddleware = ({ dispatch }) => next => action => {
  const receiveSingleGroup = group =>
    dispatch(GroupActions.receiveSingleGroup(group));
  const receiveGroups = groups =>
    dispatch(GroupActions.receiveGroups(groups));
  const errorCb = xhr =>
    dispatch(GroupActions.receiveGroupErrors(xhr.responseJSON));
  let successCb;

  switch(action.type) {
    case GroupConstants.FETCH_GROUPS:
      fetchGroups(receiveGroups, errorCb);
      return next(action);
    case GroupConstants.FETCH_SINGLE_GROUP:
      console.log('fetching single group');
      fetchSingleGroup(action.groupId, receiveSingleGroup, errorCb);
      return next(action);
    case GroupConstants.CREATE_GROUP:
      successCb = group => {
        hashHistory.push(`/groups/${ group.id }`);
      };
      createGroup(action.group, successCb, errorCb);
      return next(action);
    case GroupConstants.UPDATE_GROUP:
      createGroup(action.group, receiveSingleGroup, errorCb);
      return next(action);
    case GroupConstants.CREATE_GROUP_MEMBERSHIP:
      successCb = groupMembership =>
        dispatch(GroupActions.fetchSingleGroup(groupMembership.group_id));
      createGroupMembership(action.groupId,
                            action.groupMembership, successCb, errorCb);
      return next(action);
    case GroupConstants.DELETE_GROUP_MEMBERSHIP:
      const groupId = action.group_id;
      successCb = () => {
        console.log(groupId);
        dispatch(GroupActions.fetchSingleGroup(groupId));
      };
      deleteGroupMembership(action.groupId,
                            action.groupMembership, successCb, errorCb);
      return next(action);
    default:
      return next(action);
  }
};

export default GroupMiddleware;
