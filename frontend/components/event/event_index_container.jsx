import { connect } from 'react-redux';
import { SessionActions } from '../../actions/session_actions';
import Events from './event_index';

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(SessionActions.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
