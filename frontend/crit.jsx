import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Modal from 'react-modal';
import Root from './components/root';

import { GroupActions } from './actions/group_actions';
import { UserActions } from './actions/user_actions';
import { EventActions } from './actions/event_actions';
import { EventResponseActions } from './actions/event_response_actions';
import { ConditionActions } from './actions/condition_actions';
import { AvailabilityActions } from './actions/availability_actions';

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
  window.ConditionActions = ConditionActions;
  window.UserActions = UserActions;
  window.AvailabilityActions = AvailabilityActions;
});
