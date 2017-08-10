/* index.js defines a lot of the low level plumbing - changes here should rarely be required
*   - Configures hot module replacement
*   - Initialises redux state management
*   - Bootstraps application to the DOM
* */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'

// Redux
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux'
import reducers from './Redux/Reducers';

import Router from './router';

// Create the Redux Store
const store = createStore(
  reducers,
  {}, // initial state (we set initial state in reducers, so this can be empty)
  // Compose allows us to combine redux middleware, like async / ajax support
  compose(
    // Only applying the redux dev tools middleware for now
    (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )
);

// Allow hot reloading of the redux reducers
if (module.hot) {
  module.hot.accept('./Redux/Reducers', () => {
    const nextRootReducer = require('./Redux/Reducers');
    store.replaceReducer(nextRootReducer);
  });
}

// Bootstrapping the app onto the DOM
const renderApp = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

renderApp(Router);

// Enable hot module replacement for router/index.js or any submodules of it
if (module.hot) {
  module.hot.accept('./router', () => {
    renderApp(Router)
  });
}