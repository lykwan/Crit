import { GroupConstants, GroupActions } from '../actions/group_actions';
import { fetchGroups, fetchSingleGroup, createGroup, editGroup, deleteGroup }
  from '../util/group_api_util';

const GroupMiddleware = ({ dispatch }) => next => action => {
  let successCb;
  let errorCb;

  switch(action.type) {
    case GroupConstants.FETCH_GROUPS:
      successCb = groups => dispatch(GroupActions.receiveGroups(groups));
      errorCb = xhr =>
        dispatch(GroupActions.receiveGroupErrors(xhr.responseJSON));
      fetchGroups(successCb, errorCb);
      return next(action);
    case GroupConstants.FETCH_SINGLE_GROUP:
      successCb = group => dispatch(GroupActions.receiveSingleGroup(group));
      errorCb = xhr =>
        dispatch(GroupActions.receiveGroupErrors(xhr.responseJSON));
      fetchSingleGroup(action.groupId, successCb, errorCb);
      return next(action);
    default:
      return next(action);
  }
};

export default GroupMiddleware;
