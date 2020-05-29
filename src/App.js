import React from 'react';
import logo from './assets/img/logo.png';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App content">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Personal TODO List</p>
      <Button variant="warning">Learn React</Button>
    </div>
  );
}

export default App;
