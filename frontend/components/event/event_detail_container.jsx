import { connect } from 'react-redux';
import EventDetail from './event_detail';

const mapStateToProps = state => ({
  eventData: state.events.eventDetail
});

export default connect(
  mapStateToProps
)(EventDetail);
