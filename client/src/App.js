import React, { Component } from 'react';
import logo from './logo.svg';
import Game from './components/Game';
import './App.css';

class App extends Component {

  // TESTING CONNECTION TO API
  // componentDidMount() {
  //   window.fetch('api/words')
  //     .then(rsp => rsp.json())
  //     .then(json=> console.log(json))
  //     .catch(error=> console.log(error))
  // }

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
