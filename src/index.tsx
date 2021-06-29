import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SWRConfig } from 'swr';

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        errorRetryCount: 0,
        fetcher: (url:string) => fetch(url).then(res => res.json())
      }}
    >
      <App />
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
