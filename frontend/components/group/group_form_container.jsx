import { connect } from 'react-redux';
import GroupForm from './group_form';
import { GroupActions } from '../../actions/group_actions';

const mapStateToProps = state => {
  let errors = [];
  let successSubmitGroupId = null;

  if (state.groups.groupDetail) {
    successSubmitGroupId = state.groups.groupDetail.id;
  } else if (state.groups.errors) {
    errors = state.groups.errors;
  }
  
  return {
    successSubmitGroupId,
    errors
  };
};

const mapDispatchToProps = dispatch => {
  return ({
    createGroup: (group) => dispatch(GroupActions.createGroup(group)),
    updateGroup: (groupId, group) =>
      dispatch(GroupActions.updateGroup(groupId, group))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupForm);
