import React from 'react';
import logo from './logo.svg';
import './App.css';
import First from './components/First';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <First desc="Hello First Component" desc2="test2" />
      </header>
    </div>
  );
}

export default App;
