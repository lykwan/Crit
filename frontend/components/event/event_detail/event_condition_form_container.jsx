import { connect } from 'react-redux';
import { ConditionActions } from '../../../actions/condition_actions';
import { UserActions } from '../../../actions/user_actions';
import EventConditionForm from './event_condition_form';

const mapStateToProps = (state, ownProps) => {
  let users = [];
  if (state.users.users) {
    users = state.users.users.map(user => {
      return {
        value: user.id,
        label: user.username
      };
    });
  }

  return {
    condition: state.condition.condition,
    eventResponseId: ownProps.eventResponseId,
    users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createCondition: (eventResponseId, condition) => {
      dispatch(
        ConditionActions.createCondition(eventResponseId, condition)
      );
    },
    fetchCondition: (eventResponseId) => {
      dispatch(
        ConditionActions.fetchCondition(eventResponseId)
      );
    },
    fetchUsers: () => {
      dispatch(
        UserActions.fetchUsers()
      );
    },
    updateCondition: (eventResponseId, eventResponse) => {
      dispatch(
        ConditionActions.updateCondition(eventResponseId, eventResponse)
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventConditionForm);
