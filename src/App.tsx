import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    (async () => {
      const res = await fetch(`https://api-tokyochallenge.odpt.org/api/v4/odpt:Train?acl:consumerKey=${process.env.REACT_APP_ACL_CONSUMERKEY}`)
      console.log(res)
      const json = await res.json();
      console.log(json)
    })()
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
