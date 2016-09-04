import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Modal from 'react-modal';
import Root from './components/root';

import { GroupActions } from './actions/group_actions';
import { EventActions } from './actions/event_actions';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = { session: { currentUser: window.currentUser,
                                  errors: [] }};
  }

  const store = configureStore(preloadedState);
  window.store = store; //DElELTE
  const rootEl = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={ store } />, rootEl);

  window.GroupActions = GroupActions;
  window.EventActions = EventActions;
});
