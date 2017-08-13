// index.js defines a lot of the low level plumbing and bootstrapping

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import Router from './router';
import store from './Redux';

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

// Enable hot module replacement
if (module.hot) {
  module.hot.accept('./router', () => {
    renderApp(Router);
  });
  module.hot.accept('./Redux/Reducers', () => {
    const nextRootReducer = require('./Redux/Reducers');
    console.log(nextRootReducer);
    store.replaceReducer(nextRootReducer);
  });
}
