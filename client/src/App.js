import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import Game from './containers/Game';
import NavBar from './components/NavBar';
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
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <h1 className="App-title">Word Scramble</h1>
          </header>
          <NavBar />
          <Route exact path="/" render={() => <h1>Welcome to the home page</h1>} />
          <Route exact path="/play" component={GamePage} />
          <Route exact path="/scores" render={() => <h1>High Scores</h1>} />
          {/*<Game initialSeconds={30}/>*/}
        </div>
      </Router>
    );
  }
}

export default App;
