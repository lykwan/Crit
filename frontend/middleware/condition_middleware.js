import { ConditionConstants, ConditionActions }
  from '../actions/condition_actions';
import { fetchCondition,
         createCondition,
         updateCondition
       } from '../util/condition_api_util';

const ConditionMiddleware = ({ dispatch }) => next => action => {
  const receiveCondition = condition => {
    dispatch(ConditionActions.receiveCondition(condition));
  };
  const errorCb = xhr => {
    dispatch(ConditionActions.receiveConditionErrors(xhr.responseJSON));
  };

  switch(action.type) {
    case ConditionConstants.FETCH_CONDITION:
      fetchCondition(action.eventResponseId, receiveCondition, errorCb);
      return next(action);
    case ConditionConstants.CREATE_CONDITION:
      createCondition(action.eventResponseId,
                      action.condition,
                      receiveCondition,
                      errorCb);
      return next(action);
    case ConditionConstants.UPDATE_CONDITION:
      updateCondition(action.eventResponseId,
                      action.condition,
                      receiveCondition,
                      errorCb);
      return next(action);
    default:
      return next(action);
  }
};

export default ConditionMiddleware;
