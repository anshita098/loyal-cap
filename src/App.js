import React, { Component } from 'react';
import './App.css';
import PersistentDrawer from './drawer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <PersistentDrawer/>
      </div>
    );
  }
}

export default App;
