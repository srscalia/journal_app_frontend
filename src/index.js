import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
  import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
/* eslint-disable no-underscore-dangle */
const store = createStore(reducer);
/* eslint-enable */
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
