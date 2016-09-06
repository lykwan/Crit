export const ConditionConstants = {
  FETCH_CONDITION: 'FETCH_CONDITION',
  RECEIVE_CONDITION: 'RECEIVE_CONDITION',
  CREATE_CONDITION: 'CREATE_CONDITION',
  UPDATE_CONDITION: 'UPDATE_CONDITION',
  CLEAR_CONDITION: 'CLEAR_CONDITION',
  RECEIVE_CONDITION_ERRORS: 'RECEIVE_CONDITION_ERRORS'
};

const fetchCondition = (eventResponseId) => {
  return {
    type: ConditionConstants.FETCH_CONDITION,
    eventResponseId
  };
};

const receiveCondition = (condition) => {
  return {
    type: ConditionConstants.RECEIVE_CONDITION,
    condition
  };
};

const createCondition = (eventResponseId, condition) => {
  return {
    type: ConditionConstants.CREATE_CONDITION,
    eventResponseId,
    condition
  };
};

const updateCondition = (eventResponseId, condition) => {
  return {
    type: ConditionConstants.UPDATE_CONDITION,
    eventResponseId,
    condition
  };
};

const receiveConditionErrors = (errors) => {
  return {
    type: ConditionConstants.RECEIVE_CONDITION_ERRORS,
    errors
  };
};

const clearCondition = () => {
  return {
    type: ConditionConstants.CLEAR_CONDITION
  };
};

export const ConditionActions = {
  fetchCondition,
  receiveCondition,
  createCondition,
  updateCondition,
  receiveConditionErrors,
};
