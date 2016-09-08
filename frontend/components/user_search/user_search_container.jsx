import { connect } from 'react-redux';
import { UserActions } from '../../actions/user_actions';
import UserSearch from './user_search';

const mapStateToProps = (state, ownProps) => ({
  users: state.users.users,
  membersInput: ownProps.membersInput,
  setMembersInput: ownProps.setMembersInput,
  multi: ownProps.multi
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: (input) => dispatch(UserActions.fetchUsers(input))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSearch);
