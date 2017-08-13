// Create the Redux Store
import { createStore, compose } from 'redux';
import reducers from './Reducers';

export default createStore(
  reducers,
  {}, // initial state (we set initial state in reducers, so this can be empty)
  // Compose allows us to combine redux middleware, like async / ajax support
  compose(
    // Only applying the redux dev tools middleware for now
    (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
);

