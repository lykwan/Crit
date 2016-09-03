import { connect } from 'react-redux';
import { SessionActions } from '../../actions/session_actions';
import { EventActions } from '../../actions/event_actions';
import EventIndex from './event_index';

const mapStateToProps = state => ({
  events: state.events.events
});

export default connect(
  mapStateToProps
)(EventIndex);
