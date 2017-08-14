// Create the Redux Store
import { createStore, compose, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import reducers from './Reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {}, // initial state (we set initial state in reducers, so this can be empty)
  composeEnhancers(
    applyMiddleware(apiMiddleware)
  )
);

export default store;
