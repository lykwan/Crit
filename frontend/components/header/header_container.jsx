import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: Boolean(state.session.currentUser),
  location: ownProps.location
});

export default connect(
  mapStateToProps
)(Header);
