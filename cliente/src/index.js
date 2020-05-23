import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'jquery/dist/jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

import store from './store/index';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
