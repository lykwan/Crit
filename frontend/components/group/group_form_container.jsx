import { connect } from 'react-redux';
import GroupForm from './group_form';
import { GroupActions } from '../../actions/group_actions';


const mapDispatchToProps = dispatch => {
  return ({
    createGroup: (group) => dispatch(GroupActions.createGroup(group)),
    editGroup: (groupId, group) =>
      dispatch(GroupActions.editGroup(groupId, group))
  });
};

export default connect(
  null,
  mapDispatchToProps
)(GroupForm);
