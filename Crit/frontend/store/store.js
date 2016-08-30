import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import RootMiddleware from '../middleware/root_middleware';

const configureStore = () => {
  return createStore(RootReducer, RootMiddleware);
};

export default configureStore;
