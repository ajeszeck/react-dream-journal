import React, { Component } from 'react';
import './App.css';
import DreamsContainer from './components/DreamsContainer.js'
import base from './base.js';
import AddDreamForm from './components/AddDreamForm.js'

class App extends Component {
  state = {
    dreams: {},
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

  addDream = (dream) => {
    const dreams = {...this.state.dreams}
    dreams[`dream${Date.now()}`] = dream;
    this.setState({ dreams });
    console.log(this.state.dreams)
  }

  deleteDream = (key) => {
    console.log("delete clicked")
    // 1. take a copy of all dreams
    const dreams = {...this.state.dreams};
    // 2. set current dream equal to null to remove from firebase
    dreams[key] = null;
    // 3. set the altered state to be equal to the saved state
    this.setState({ dreams });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dream Journal</h1>
        </header>
        <div className="app-body">
          <DreamsContainer className="dream-container" dreams={this.state.dreams}
          deleteDream={this.deleteDream}/>
          <AddDreamForm
            addDream={this.addDream} />
        </div>
      </div>
    );
  }
}

export default App;
