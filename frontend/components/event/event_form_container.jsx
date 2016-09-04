import { connect } from 'react-redux';
import { EventActions } from '../../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = state => {
  let errors = [];

  if (state.events.errors) {
    errors = state.events.errors;
  }

  return {
    errors
  };
};

const mapDispatchToProps = dispatch => ({
   createEvent: (eventData) =>
    dispatch(EventActions.createEvent(eventData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
