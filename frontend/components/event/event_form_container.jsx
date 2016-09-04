import { connect } from 'react-redux';
import { EventActions } from '../../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = state => {
  let errors = [];
  if (state.events.errors) {
    errors = state.events.errors;
  }

  let groups = [];
  if (state.groups.groups) {
    groups = state.groups.groups.map(group => {
      return {
        value: group.title,
        label: group.title,
        groupId: group.id
      };
    });
  }

  return {
    errors,
    groups
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
