import { connect } from 'react-redux';
import { UserActions } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  return ({
    user: state.users.userDetail
  });
};

const mapDispatchToProps = (dispatch) => ({
  updateUser: (userId, user) => dispatch(UserActions.updateUser(userId, user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
