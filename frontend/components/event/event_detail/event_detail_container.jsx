import { connect } from 'react-redux';
import EventDetail from './event_detail';
import { EventActions } from '../../../actions/event_actions';

const mapStateToProps = state => ({
  eventData: state.events.eventDetail,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  closePoll: eventId => dispatch(EventActions.closePoll(eventId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetail);
