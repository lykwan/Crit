import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import UserMiddleware from './user_middleware';
import GroupMiddleware from './group_middleware';
import EventMiddleware from './event_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  UserMiddleware,
  GroupMiddleware,
  EventMiddleware
);

export default RootMiddleware;
