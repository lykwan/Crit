import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import UserMiddleware from './user_middleware';
import GroupMiddleware from './group_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  UserMiddleware,
  GroupMiddleware
);

export default RootMiddleware;
