import { connect } from 'react-redux';
import GroupForm from './group_form';
import { GroupActions } from '../../actions/group_actions';

const mapStateToProps = (state, ownProps) => {
  let successSubmitGroupId = null;

  if (state.groups.groupDetail) {
    successSubmitGroupId = state.groups.groupDetail.id;
  }

  console.log('getting updated');
  console.log(state.groups.errors);

  return {
    successSubmitGroupId,
    errors: state.groups.errors,
    isEditForm: ownProps.isEditForm,
    group: ownProps.group
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
