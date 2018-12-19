import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'

/* eslint-disable no-underscore-dangle */
const store = createStore(reducer);
/* eslint-enable */
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root'));
