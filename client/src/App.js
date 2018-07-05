import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import Game from './containers/Game';
import './App.css';

class App extends Component {

  // TESTING CONNECTION TO API
  // componentDidMount() {
  //   window.fetch('api/words?difficulty=very_hard')
  //     .then(rsp => rsp.json())
  //     .then(json=> console.log(json))
  //     .catch(error=> console.log(error));
  //   window.fetch('api/words/10')
  //     .then(rsp => rsp.json())
  //     .then(json=> console.log(json))
  //     .catch(error=> console.log(error))
  // }


  render() {
    const GamePage = () => {
      return (
        <Game initialSeconds={30} />
      )
    }
    
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Route exact path="/" render={() => <h1>Wlecome to the home page</h1>} />
          <Route exact path="/play" component={GamePage} />
          {/*<Game initialSeconds={30}/>*/}
        </div>
      </Router>
    );
  }
}

export default App;
