import React from 'react';
import { connect } from 'react-redux';
import { SessionActions } from '../../actions/session_actions';
import { RouteConstants } from '../../util/route_constants';
import Navbar from './navbar';

const mapStateToProps = (state, ownProps) => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(SessionActions.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
