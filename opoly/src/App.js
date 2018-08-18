import React, { Component } from 'react';
import './App.css';
import PlayerSelect from './containers/PlayerSelect';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayerSelect />
      </div>
    );
  }
}

export default App;
