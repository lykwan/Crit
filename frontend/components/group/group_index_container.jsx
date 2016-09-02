import { connect } from 'react-redux';
import GroupIndex from './group_index';
import { GroupActions } from '../../actions/group_actions';

const mapStateToProps = state => {
  return {
    groups: state.groups.groups
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleGroup: () => dispatch(GroupActions.fetchSingleGroup())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupIndex);
