import { createStore, compose } from 'redux';
import reducer from './reducers/index';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = preloadedState => createStore(
  reducer,
  preloadedState,
  composeEnhancers(),
);

const store = configureStore({});

export default store;
