import { connect } from 'react-redux';
import GroupDetail from './group_detail';

const mapStateToProps = state => {
  return {
    group: state.groups.groupDetail
  };
};

export default connect(
  mapStateToProps
)(GroupDetail);
