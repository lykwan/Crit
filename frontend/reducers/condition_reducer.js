import { ConditionConstants } from '../actions/condition_actions';
import { merge } from 'lodash';

const ConditionReducer = (state = {}, action) => {
  switch(action.type) {
    case ConditionConstants.RECEIVE_CONDITION:
      return merge({}, { condition: action.condition });
    case ConditionConstants.RECEIVE_CONDITION_ERRORS:
      return merge({}, state, { errors: action.errors });
    case ConditionConstants.CLEAR_CONDITION:
      return {};
    default:
      return state;
  }
};

export default ConditionReducer;
