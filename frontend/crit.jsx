import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { UserActions } from './actions/user_actions';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = { session: { currentUser: window.currentUser,
                                  errors: [] }};
  }

  const store = configureStore(preloadedState);
  window.store = store;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, rootEl);

  window.UserActions = UserActions;
});
