import { connect } from 'react-redux';
import { AvailabilityActions } from '../../../actions/availability_actions';
import EventSchedule from './event_schedule';

const mapStateToProps = (state, ownProps) => {
  let availabilities = [];
  if (state.availability.length >= 1) {
    availabilities = state.availability;
  }

  if (ownProps.eventData.is_time_finalized) {
    availabilities = ownProps.eventData.finalized_availabilities;
  }

  return {
    availabilities,
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
    createAvailabilities: (eventId, availabilities) => {
      dispatch(
        AvailabilityActions.createAvailabilities(eventId, availabilities)
      );
    },
    updateAvailabilities: (eventId, availabilities) => {
      dispatch(
        AvailabilityActions.updateAvailabilities(eventId, availabilities)
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventSchedule);
