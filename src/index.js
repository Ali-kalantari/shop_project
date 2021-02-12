import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import reducer from './store/reducer';
import "bootstrap/dist/css/bootstrap.min.css";


const store = createStore(reducer);


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

