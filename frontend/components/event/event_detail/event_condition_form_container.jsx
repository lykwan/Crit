import { connect } from 'react-redux';
import { ConditionActions } from '../../../actions/condition_actions';
import { UserActions } from '../../../actions/user_actions';
import EventConditionForm from './event_condition_form';

const mapStateToProps = (state, ownProps) => {
  let members = [];
  if (ownProps.eventData) {
    let regularMembers = ownProps.eventData.group.regular_members
      .filter(user => {
        return state.session.currentUser.id !== user.id;
      }).map(user => {
        return {
          value: user.id,
          label: user.username
        };
      });
    let admins = ownProps.eventData.group.admins
      .filter(user => {
        return state.session.currentUser.id !== user.id;
      }).map(user => {
        return {
          value: user.id,
          label: user.username
        };
      });

    members = regularMembers.concat(admins);
  }

  return {
    condition: state.condition.condition,
    eventResponseId: ownProps.eventResponseId,
    members
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
    },
    clearCondition: () => {
      dispatch(
        ConditionActions.clearCondition()
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventConditionForm);
