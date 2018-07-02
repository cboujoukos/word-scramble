import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// REMOVE THIS LINE IF SETTING UP ACTIVE ADMIN
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// REMOVE THIS LINE IF SETTING UP ACTIVE ADMIN
registerServiceWorker();
