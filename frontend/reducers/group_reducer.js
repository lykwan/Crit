import { GroupConstants } from '../actions/group_actions';
import { merge } from 'lodash';

const allGroupsDict = groups => {
  return groups.reduce((dict, group) => {
    dict[group.id] = group;
    return dict;
  }, {});
};

const GroupReducer = (state = {}, action) => {
  switch(action.type) {
    case GroupConstants.RECEIVE_GROUPS:
      const newState = merge({}, { groups: action.groups });
      return newState;
    case GroupConstants.RECEIVE_SINGLE_GROUP:
      return merge({}, { groupDetail: action.group });
    case GroupConstants.RECEIVE_GROUP_ERRORS:
      return merge({}, { errors: action.errors });
    default:
      return state;
  }
};

export default GroupReducer;
