import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import Splash from './splash/splash';
import EventsContainer from './events/events_container';
import GroupIndexContainer from './group/group_index_container';
import ProfileContainer from './profile/profile_container';

import RouteConstants from '../util/route_constants';
import { UserActions } from '../actions/user_actions';
import { GroupActions } from '../actions/group_actions';

class AppRouter extends React.Component {

  // auth helper functions and onEnter functions
  isLoggedIn() {
    const currentState = this.context.store.getState();
    return currentState.session.currentUser;
  }

  _ensureLoggedIn(_, replace) {
    if (!this.isLoggedIn()) {
      replace("/");
    }
  }

  _redirectIfLoggedIn(_, replace) {
    if (this.isLoggedIn()) {
      replace(RouteConstants.EVENTS.route);
    }
  }

  // profile onEnter functions
  _handleEnterUserProfile(nextState, replace) {
    this._ensureLoggedIn(nextState, replace);
    const userId = nextState.params.id;
    const dispatch = this.context.store.dispatch;
    dispatch(UserActions.fetchUser(userId));
  }

  // group onEnter functions
  _handleEnterGroups(_, replace) {
    this._ensureLoggedIn(_, replace);
    this.requestAllGroups();
  }

  requestAllGroups() {
    const dispatch = this.context.store.dispatch;
    dispatch(GroupActions.fetchGroups());
  }

  render() {
    return (
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ Splash }
                      onEnter={ this._redirectIfLoggedIn.bind(this) } />
          <Route path='events' component={ EventsContainer }
                               onEnter={ this._ensureLoggedIn.bind(this) } />
          <Route path='groups' component={ GroupIndexContainer }
                               onEnter={ this._handleEnterGroups.bind(this) } >
          </Route>
          <Route path='profile' component={ ProfileContainer }
                                onEnter={ this._ensureLoggedIn.bind(this) } />
          <Route path='users/:id'
                 component={ ProfileContainer }
                 onEnter={ this._handleEnterUserProfile.bind(this) } />
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
