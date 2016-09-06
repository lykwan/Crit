import { connect } from 'react-redux';
import { AvailabilityActions } from '../../../actions/availability_actions';
import EventSchedule from './event_schedule';

const mapStateToProps = (state, ownProps) => {
  return {
    availability: state.availability.availability,
    eventData: ownProps.eventData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAvailability: (eventId) => {
      dispatch(
        AvailabilityActions.fetchAvailability(eventId)
      );
    },
    createAvailability: (eventId, availability) => {
      dispatch(
        AvailabilityActions.createAvailability(eventId, availability)
      );
    },
    updateAvailability: (eventId, availability) => {
      dispatch(
        AvailabilityActions.updateAvailability(eventId, availability)
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventSchedule);
