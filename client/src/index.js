import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import rootReducer from './reducers'
import App from './App';

// REMOVE THIS LINE IF SETTING UP ACTIVE ADMIN
import registerServiceWorker from './registerServiceWorker';

// require('dotenv').config();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// REMOVE THIS LINE IF SETTING UP ACTIVE ADMIN
registerServiceWorker();
