import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import AuthFormContainer from './auth_form/auth_form_container';
import EventsContainer from './events/events_container';

class AppRouter extends React.Component {
  isLoggedIn() {
    const currentState = this.context.store.getState();
    return currentState.session.currentUser;
  }

  _ensureLoggedIn(nextState, replace) {
    if (!this.isLoggedIn()) {
      replace("/");
    }
  }

  _redirectIfLoggedIn(nextState, replace) {
    if (this.isLoggedIn()) {
      replace("/events");
    }
  }

  render() {
    return (
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ AuthFormContainer }
                      onEnter={ this._redirectIfLoggedIn.bind(this) }/>
          <Route path='events' component={ EventsContainer }
                               onEnter={ this._ensureLoggedIn.bind(this) }/>
        </Route>
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired
};

export default AppRouter;
