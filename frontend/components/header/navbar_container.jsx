import { connect } from 'react-redux';
import { SessionActions } from '../../actions/session_actions';
import Navbar from './navbar';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(SessionActions.logout())
});

export default connect(
  null,
  mapDispatchToProps
)(Navbar);
