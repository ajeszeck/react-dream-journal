import React, { Component } from 'react';
import './App.css';
import DreamsContainer from './components/DreamsContainer.js'
import base from './base.js';
import AddDreamForm from './components/AddDreamForm.js'

class App extends Component {
  state = {
    dreams: [{description: "I am a dream in state."}],
  };

  componentDidMount() {
    console.log("Mounted!")
    // FIRST REINSTATE OUR LOCAL localStorage
    this.ref = base.syncState(`dreams`, {
      context: this,
      state: 'dreams'
    });
  };

  componentWillUnmount() {
    base.removeBinding(this.ref);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dream Journal</h1>
        </header>
        <div className="app-body">
          <AddDreamForm />
          <DreamsContainer className="dream-container"/>
        </div>
      </div>
    );
  }
}

export default App;
