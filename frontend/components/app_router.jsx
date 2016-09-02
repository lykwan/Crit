import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import Splash from './splash/splash';
import EventIndexContainer from './event/event_index_container';
import GroupIndexContainer from './group/group_index_container';
import GroupDetailContainer from './group/group_detail_container';
import GroupFormContainer from './group/group_form_container';
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
    const dispatch = this.context.store.dispatch;
    dispatch(GroupActions.fetchGroups());
  }

  _handleEnterGroupDetail(nextState, replace) {
    this._ensureLoggedIn(nextState, replace);
    const groupId = nextState.params.id;
    const dispatch = this.context.store.dispatch;
    dispatch(GroupActions.fetchSingleGroup(groupId));
  }


  render() {
    return (
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ Splash }
                      onEnter={ this._redirectIfLoggedIn.bind(this) } />
          <Route path='events'
                 component={ EventIndexContainer }
                 onEnter={ this._ensureLoggedIn.bind(this) } />
          <Route path='groups'
                 component={ GroupIndexContainer }
                 onEnter={ this._handleEnterGroups.bind(this) } />
          <Route path='groups/new'
                 component={ GroupFormContainer } />
                 onEnter={ this._ensureLoggedIn.bind(this) } />
          <Route path='groups/:id'
                 component={ GroupDetailContainer }
                 onEnter={ this._handleEnterGroupDetail.bind(this) } />
          <Route path='profile'
                 component={ ProfileContainer }
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
