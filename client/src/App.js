import React, { Component } from 'react';
import logo from './logo.svg';
import Game from './components/Game';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Game initialSeconds={15}/>
      </div>
    );
  }
}

export default App;
