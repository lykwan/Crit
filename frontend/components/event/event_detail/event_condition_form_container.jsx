import { connect } from 'react-redux';
import { ConditionActions } from '../../../actions/condition_actions';
import EventConditionForm from './event_condition_form';

const mapStateToProps = (state, ownProps) => {
  return {
    condition: state.condition.condition,
    eventResponseId: ownProps.eventResponseId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCondition: (eventResponseId) => {
      dispatch(
        ConditionActions.fetchCondition(eventResponseId)
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
