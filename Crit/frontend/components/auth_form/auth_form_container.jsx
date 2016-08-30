import { connect } from 'react-redux';
import { SessionActions } from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(SessionActions.logout()),
  login: (user) => dispatch(SessionActions.login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
