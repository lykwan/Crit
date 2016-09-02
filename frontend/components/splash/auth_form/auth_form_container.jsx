import { connect } from 'react-redux';
import { SessionActions } from '../../../actions/session_actions';
import AuthForm from './auth_form';

const mapStateToProps = state => {
  return {
    isLoggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(SessionActions.signup(user)),
  login: (user) => dispatch(SessionActions.login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
