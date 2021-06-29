import React from 'react';
import useSWR from 'swr';
import logo from './logo.svg';
import './App.css';

function useTrainInfromationAPI() {
  const { data, error } = useSWR(
    `https://api-tokyochallenge.odpt.org/api/v4/odpt:TrainInformation?acl:consumerKey=${process.env.REACT_APP_ACL_CONSUMERKEY}`,
  );
  return { data, error };
}

function App() {
  const { data, error } = useTrainInfromationAPI()
  error && console.error(error)
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
        {error ? (
          <div>failed to load</div>
        ) : data ? (
          <div>{data.length}</div>
        ) : (
          <div>loading...</div>
        )}
      </header>
    </div>
  );
}

export default App;
