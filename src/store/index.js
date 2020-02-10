// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import reducer from 'src/store/reducer';
import searchMiddleware from './searchMiddleware';

// == Store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    searchMiddleware
  ),
);

const store = createStore(
  reducer,
  // preloadedState,
  enhancers,
);

// == Export
export default store;
