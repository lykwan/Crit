import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import UserMiddleware from './user_middleware';
import GroupMiddleware from './group_middleware';
import EventMiddleware from './event_middleware';
import EventResponseMiddleware from './event_response_middleware.js';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  UserMiddleware,
  GroupMiddleware,
  EventMiddleware,
  EventResponseMiddleware
);

export default RootMiddleware;
