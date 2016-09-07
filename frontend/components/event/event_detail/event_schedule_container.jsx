import { connect } from 'react-redux';
import { AvailabilityActions } from '../../../actions/availability_actions';
import EventSchedule from './event_schedule';

const mapStateToProps = (state, ownProps) => {
  return {
    availabilities: state.availability,
    eventData: ownProps.eventData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAvailabilities: (eventId) => {
      dispatch(
        AvailabilityActions.fetchAvailabilities(eventId)
      );
    },
    createAvailabilities: (eventId, availability) => {
      dispatch(
        AvailabilityActions.createAvailabilities(eventId, availability)
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventSchedule);
