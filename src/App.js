import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DreamsContainer from './components/DreamsContainer.js'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dream Journal</h1>
        </header>
        <p className="App-intro">
          <DreamsContainer />
        </p>
      </div>
    );
  }
}

export default App;
