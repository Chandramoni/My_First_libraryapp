import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import store from './configure-store';
import { Provider } from 'react-redux';
// import {
//     BrowserRouter as Router,
//     Route,
//     Switch
//   } from "react-router-dom";

ReactDOM.render((
    <Provider store={store}>  
    <App/>         
    </Provider>
  
  ), document.getElementById('root'));