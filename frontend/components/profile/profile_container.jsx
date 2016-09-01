import { connect } from 'react-redux';
import { UserActions } from '../../actions/user_actions';
import Profile from './profile';


const mapStateToProps = (state, ownProps) => {
  if (ownProps.location.pathname.startsWith('/users')) {
    return ({
      user: state.users.userDetail
    });
  } else {
    return ({
      user: state.session.currentUser
    });
  }
};


export default connect(
  mapStateToProps
)(Profile);
