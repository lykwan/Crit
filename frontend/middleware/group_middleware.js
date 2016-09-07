import { hashHistory } from 'react-router';
import { GroupConstants, GroupActions } from '../actions/group_actions';
import { fetchGroups, fetchSingleGroup, createGroup, updateGroup, deleteGroup }
  from '../util/group_api_util';

const GroupMiddleware = ({ dispatch }) => next => action => {
  const receiveSingleGroup = group =>
    dispatch(GroupActions.receiveSingleGroup(group));
  const receiveGroups = groups =>
    dispatch(GroupActions.receiveGroups(groups));
  const errorCb = xhr =>
    dispatch(GroupActions.receiveGroupErrors(xhr.responseJSON));

  switch(action.type) {
    case GroupConstants.FETCH_GROUPS:
      fetchGroups(receiveGroups, errorCb);
      return next(action);
    case GroupConstants.FETCH_SINGLE_GROUP:
      fetchSingleGroup(action.groupId, receiveSingleGroup, errorCb);
      return next(action);
    case GroupConstants.CREATE_GROUP:
      const successCb = group => {
        hashHistory.push(`/groups/${ group.id }`);
      };
      createGroup(action.group, successCb, errorCb);
      return next(action);
    default:
      return next(action);
  }
};

export default GroupMiddleware;
