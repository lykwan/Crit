import { connect } from 'react-redux';
import Header from './header';

const mapStateToProps = state => ({
  isLoggedIn: Boolean(state.session.currentUser)
});

export default connect(
  mapStateToProps
)(Header);
