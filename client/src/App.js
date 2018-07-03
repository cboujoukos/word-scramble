import React, { Component } from 'react';
import logo from './logo.svg';
import Game from './containers/Game';
import './App.css';

class App extends Component {

  // TESTING CONNECTION TO API
  componentDidMount() {
    window.fetch('api/words?difficulty=very_hard')
      .then(rsp => rsp.json())
      .then(json=> console.log(json))
      .catch(error=> console.log(error));
    window.fetch('api/words/10')
      .then(rsp => rsp.json())
      .then(json=> console.log(json))
      .catch(error=> console.log(error))
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Game initialSeconds={30}/>
      </div>
    );
  }
}

export default App;
