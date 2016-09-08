import { connect } from 'react-redux';
import GroupDetail from './group_detail';
import { GroupActions } from '../../actions/group_actions';

const mapStateToProps = state => {
  console.log('in group detail cont');
  console.log(state.groups.errors);
  return {
    group: state.groups.groupDetail,
    errors: state.groups.errors,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  createGroupMembership: (groupId, groupMembership) =>
    dispatch(GroupActions.createGroupMembership(groupId, groupMembership)),
  deleteGroupMembership: (groupId, groupMembership) =>
    dispatch(GroupActions.deleteGroupMembership(groupId, groupMembership))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupDetail);
