import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Thimmi } from './component/Thimmi';
import result from './component/Result';

// import Store from '../component/redux/action/reducer/Store'


ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
     
     <Provider result={result}>
     <App />
     </Provider>
     
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
