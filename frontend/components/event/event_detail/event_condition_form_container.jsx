import { connect } from 'react-redux';
import { EventResponseActions } from '../../../actions/event_response_actions';
import EventConditionForm from './event_condition_form';

const mapStateToProps = (state, ownProps) => {
  return {
    eventResponse: state.eventResponse.eventResponse,
    eventId: ownProps.eventId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEventResponse: (eventId) => {
      dispatch(
        EventResponseActions.fetchEventResponse(eventId)
      );
    },
    createEventResponse: (eventId, eventResponse) => {
      dispatch(
        EventResponseActions.createEventResponse(eventId, eventResponse)
      );
    },
    updateEventResponse: (eventId, eventResponse) => {
      dispatch(
        EventResponseActions.updateEventResponse(eventId, eventResponse)
      );
    },
    deleteEventResponse: (eventId) => {
      dispatch(
        EventResponseActions.deleteEventResponse(eventId)
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventConditionForm);
