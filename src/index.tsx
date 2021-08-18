import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import { worker } from './mocks/browser';

console.log('ENV', process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  worker.start()
}

const renderApp = () => 
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

// if((import.meta as any).env.NODE_ENV === 'development'){
//   import('./mocks/browser')
//     .then(({worker}) => worker.start())
//     .then(()=>renderApp())
// }else{
  renderApp();
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
