import { connect } from 'react-redux';
import EventDetail from './event_detail';

const mapStateToProps = state => ({
  eventData: state.events.eventDetail
  // eventResponse: state.eventResponse.eventResponse
});

export default connect(
  mapStateToProps
)(EventDetail);
